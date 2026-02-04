const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./21(1).txt").toString().trim().split("\n");

const numArr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)
  .join(" ");

console.log(numArr);
