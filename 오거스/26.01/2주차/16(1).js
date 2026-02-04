const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./16(1).txt").toString().trim().split("\n");

const arr = input
  .slice(1)
  .map((data) => data.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];

    return a[1] - b[1];
  })
  .forEach((data) => console.log(data.join(" ")));
