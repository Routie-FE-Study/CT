const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./1.txt").toString().trim().split("\n");
const n = parseInt(input[0]);
const dist = input[1].split(" ").map(Number);
const price = input[2].split(" ").map(Number);

let cost = 0n;
let minPrice = BigInt(price[0]);

for (let i = 0; i < n - 1; i++) {
  if (BigInt(price[i]) < minPrice) minPrice = BigInt(price[i]);

  cost += minPrice * BigInt(dist[i]);
}

console.log(cost.toString());
