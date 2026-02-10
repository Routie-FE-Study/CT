const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./1.txt").toString().trim().split("\n");

const s = Number(input[0]);
let count = 0;
let temp = 1;
let sum = 0;

while (temp <= s) {
  if (temp + sum <= s) {
    count += 1;
    sum += temp;
    temp += 1;
  } else break;
}

console.log(count);
