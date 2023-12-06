const { readFileSync } = require('fs');

const INPUT_PATH = '2023/01/input.txt';

const findCalibrationValue = () => {
  const buffer = readFileSync(INPUT_PATH);
  const data = buffer.toString('utf-8');

  const cleanedData = data.replace(/[^\d\n]/g,'');

  const lines = cleanedData.split('\n');

  let totalValue = 0;

  for (let i=0;i<=lines.length-1;i++) {
    totalValue += parseInt(lines[i].charAt(0) + lines[i].charAt(lines[i].length - 1));
  }

  return totalValue;
}

console.log(findCalibrationValue());