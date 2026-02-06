const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./1.txt").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number).reverse();
let resume = 0;
let money = k;

for (const coin of coins) {
  if (money === 0) break;
  if (money >= coin) {
    const cur = money % coin;
    const count = parseInt(money / coin);

    resume += count;
    money = cur;
  }
}

console.log(resume);
