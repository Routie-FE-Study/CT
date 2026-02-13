const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./2.txt").toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }

  return a[1] - b[1];
});

let cnt = 0;
let endTime = 0;

for (const [a, b] of arr) {
  if (a >= endTime) {
    endTime = b;
    cnt += 1;
  }
}

console.log(cnt);
