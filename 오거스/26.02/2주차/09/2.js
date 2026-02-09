const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./2.txt").toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let count = 1;

while (a <= b) {
  if (a === b) break;
  if (b % 2 !== 0) {
    if (b % 10 === 1) {
      b = parseInt(b / 10);
      count += 1;
    } else break;
  } else {
    b = parseInt(b / 2);
    count += 1;
  }
}

if (b === a) console.log(count);
else console.log(-1);

/**
 * 162 -> 81
 * 81 -> 8
 * 8 -> 4
 * 4 -> 2
 */
