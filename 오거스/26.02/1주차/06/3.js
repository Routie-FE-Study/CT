const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./3.txt").toString().trim().split("-");

const numbers = input.map((str) => {
  let temp = str.split("+").map(Number);
  let sum = temp.reduce((acc, cur) => acc + cur, 0);

  return sum;
});

let answer = 0;
numbers.forEach((number, i) => {
  if (i === 0) answer += number;
  else answer -= number;
});

console.log(answer);
