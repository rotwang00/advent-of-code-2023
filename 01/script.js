const fs = require("fs");

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    return data.toString();
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

const input = readFile("data.txt");

const inputArray = input.split("\r\n");

let sum = 0;

for (line of inputArray) {
  let firstDigit;
  let lastDigit;
  for (char of line) {
    if (char >= "0" && char <= "9") {
      firstDigit = char;
      break;
    }
  }
  reversedLine = line.split("").reverse().join("");
  for (char of reversedLine) {
    if (char >= "0" && char <= "9") {
      lastDigit = char;
      break;
    }
  }
  digitString = firstDigit + lastDigit;
  sum += parseInt(digitString);
}

console.log(sum);
