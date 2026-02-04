const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./26(1).txt").toString().trim().split("\n");

const xyArr = input
  .slice(1)
  .map((xy) => xy.split(" ").map(Number))
  .sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];

    return a[0] - b[0];
  })
  .map((xy) => xy.join(" "))
  .join("\n");

console.log(xyArr);
