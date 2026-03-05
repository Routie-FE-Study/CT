const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./1.txt").toString().trim().split("\n");

const n = Number(input[0]);
const balloons = input[1].split(" ").map(Number);
const arrows = Array(1000001).fill(0);
let result = 0;

balloons.forEach((ball) => {
  if (arrows[ball] === 0) {
    arrows[ball - 1] += 1;
    result += 1;
  } else {
    arrows[ball] -= 1;
    arrows[ball - 1] += 1;
  }
});

console.log(result);
