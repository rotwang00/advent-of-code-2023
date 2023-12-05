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

// DAY 1 PROBLEM 2

let sum = 0;

const spelledAndDigits = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

for (line of inputArray) {
  let firstNumber, lastNumber;
  let firstDigit, lastDigit;
  let firstOccur = line.length;
  let lastOccur = 0;

  // Search forward
  for (term of spelledAndDigits) {
    index = line.indexOf(term);
    if (index > -1 && index < firstOccur) {
      firstNumber = term;
      firstOccur = index;
    }
  }

  // Search backward
  for (term of spelledAndDigits) {
    index = line.lastIndexOf(term);
    if (index > -1 && index >= lastOccur) {
      lastNumber = term;
      lastOccur = index;
    }
  }

  // Convert firstNumber to digit in string form
  if (spelledAndDigits.indexOf(firstNumber) <= 8) {
    firstDigit = (spelledAndDigits.indexOf(firstNumber) + 1).toString();
  } else {
    firstDigit = firstNumber;
  }

  if (spelledAndDigits.indexOf(lastNumber) <= 8) {
    lastDigit = (spelledAndDigits.indexOf(lastNumber) + 1).toString();
  } else {
    lastDigit = lastNumber;
  }

  let digitString = firstDigit + lastDigit;

  sum += parseInt(digitString);

  console.log(firstDigit, lastDigit, digitString, parseInt(digitString));
}

console.log(sum);

// DAY 1 PROLEM 1

// let sum = 0;

// for (line of inputArray) {
//   let firstDigit;
//   let lastDigit;
//   for (char of line) {
//     if (char >= "0" && char <= "9") {
//       firstDigit = char;
//       break;
//     }
//   }
//   reversedLine = line.split("").reverse().join("");
//   for (char of reversedLine) {
//     if (char >= "0" && char <= "9") {
//       lastDigit = char;
//       break;
//     }
//   }
//   digitString = firstDigit + lastDigit;
//   sum += parseInt(digitString);
// }

// console.log(sum);
