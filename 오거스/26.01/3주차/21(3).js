const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./21(3).txt").toString().trim().split("\n");

const answer = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b)
  .join("\n");

console.log(answer);
