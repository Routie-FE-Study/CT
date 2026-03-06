const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./1.txt").toString().trim().split(" ");

let n = parseInt(input[0]);
const k = parseInt(input[1]);

let sum = 0;
for (let i = 1; i <= k; i++) {
  sum += i;
}

if (sum > n) {
  console.log(-1);
} else {
  n -= sum;
  if (n % k === 0) console.log(k - 1);
  else console.log(k);
}
