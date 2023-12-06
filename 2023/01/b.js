const { readFileSync } = require("fs");

const INPUT_PATH = "2023/01/input.txt";

const numberSearchMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const findCalibrationValue = () => {
  const buffer = readFileSync(INPUT_PATH);
  const data = buffer.toString("utf-8");

  const lines = data.split("\n");

  let totalValue = 0;

  for (let line of lines) {
    let lineMap = {};
    
    lineMap = mapSpelledOut(line, lineMap);
    lineMap = mapDigits(line, lineMap);
    
    // object keys are already sorted by default
    const lineValue = Object.values(lineMap).join('');

    totalValue += parseInt(
      lineValue.charAt(0) + lineValue.charAt(lineValue.length - 1)
    );
  }

  return totalValue;
};

const mapSpelledOut = (line, lineMap) => {
  for (let [key, value] of Object.entries(numberSearchMap)) {
    const matches = [...line.matchAll(new RegExp(key, "g"))];
    
    for (let match of matches) {
      lineMap[match.index] = value;
    }
  }

  return lineMap;
}

const mapDigits = (line, lineMap) => {
  [...line.matchAll(/\d/g)].map((match) => {
    lineMap[match.index] = match[0];
  });

  return lineMap;
}

console.log(findCalibrationValue());
