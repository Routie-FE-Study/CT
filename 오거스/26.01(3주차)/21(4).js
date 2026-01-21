const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./21(4).txt").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const numArr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(numArr[k - 1]);
