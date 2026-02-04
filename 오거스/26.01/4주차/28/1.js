const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./1.txt").toString().trim().split("\n");

const strArr = [...new Set(input.slice(1))]
  .sort((a, b) => {
    if (a.length === b.length) return a.localeCompare(b);
    return a.length - b.length;
  })
  .join("\n");

console.log(strArr);
