const { readFileSync } = require('fs');

const INPUT_PATH = '2023/02/input.txt';

const findPossibleGames = () => {
  const buffer = readFileSync(INPUT_PATH);
  const data = buffer.toString('utf-8');

  const games = data.split('\n');

  let sumPower = 0;

  for (let game of games) {
    let [_, sets] = game.split(':');

    let highestRed = 0;
    let highestBlue = 0;
    let highestGreen = 0;

    colors = sets.split(/,|;/);

    for (let color of colors) {
      total = color.match(/\d+/g)[0];

      if (color.includes('red')) {
        highestRed = findHighestOfColor(total, highestRed);
      } else if (color.includes('blue')) {
        highestBlue = findHighestOfColor(total, highestBlue);
      } else if (color.includes('green')) {
        highestGreen = findHighestOfColor(total, highestGreen);
      }
    }

    sumPower += highestRed * highestBlue * highestGreen;;
  }

  return sumPower;
}

const findHighestOfColor = (total, currHighest) => {
  return total > currHighest ? parseInt(total) : currHighest;
}

console.log(findPossibleGames());