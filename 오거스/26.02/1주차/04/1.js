const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./1.txt").toString().trim().split("\n");
const members = input
  .slice(1)
  .map((member) => member.split(" "))
  .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
  .map((member) => member.join(" "))
  .join("\n");

console.log(members);
