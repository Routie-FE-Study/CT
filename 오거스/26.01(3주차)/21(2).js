const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./21(2).txt").toString().trim().split("\n");

input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b)
  .forEach((num) => console.log(num));
