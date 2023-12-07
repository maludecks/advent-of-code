const { readFileSync } = require('fs');

const INPUT_PATH = '2023/02/input.txt';

const totalRed = 12;
const totalGreen = 13;
const totalBlue = 14;

const findPossibleGames = () => {
  const buffer = readFileSync(INPUT_PATH);
  const data = buffer.toString('utf-8');

  const games = data.split('\n');

  let sumGameIds = 0;

  for (let game of games) {
    let [gameId, sets] = game.split(':');
    gameId = gameId.replace(/[^\d]/g,'');
    sets = sets.split(';');

    let validGame = true;

    for (let set of sets) {
      colors = set.split(',');

      for (let color of colors) {
        color = color.trim();
        total = color.match(/\d+/g);

        if ((color.includes('red') && total > totalRed) ||
        (color.includes('blue') && total > totalBlue) || 
        (color.includes('green') && total > totalGreen)) {
          validGame = false;
          break;
        }
      }

      if (validGame === false) {
        break;
      }
    }

    if (validGame) {
      sumGameIds += parseInt(gameId);
    }

    console.log(gameId, validGame);
  }

  return sumGameIds;
}

console.log(findPossibleGames());