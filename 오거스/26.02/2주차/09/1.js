const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./1.txt").toString().trim().split("\n");

let n = Number(input[0]);
let answer = 0;

while (n >= 0) {
  if (n === 0 || n % 5 === 0) {
    answer += parseInt(n / 5);
    n %= 5;
    console.log(answer);
    break;
  }

  answer += 1;
  n -= 3;
}

if (n !== 0) console.log(-1);
