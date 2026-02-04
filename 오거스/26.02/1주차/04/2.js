const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs
  .readFileSync("./2.txt")
  .toString()
  .trim()
  .split("")
  .map(Number)
  .sort((a, b) => b - a)
  .join("");

console.log(input);
