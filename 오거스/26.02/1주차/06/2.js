const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./2.txt").toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;
let temp = 0;

for (let i = 0; i < n; i++) {
  answer += temp + arr[i];
  temp += arr[i];
}

console.log(answer);
