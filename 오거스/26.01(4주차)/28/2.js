const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./2.txt").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);
const sortedArr = [...new Set(arr)].sort((a, b) => a - b);

const indexMap = new Map();
sortedArr.forEach((num, idx) => indexMap.set(num, idx));

const newArr = arr.map((num) => indexMap.get(num)).join(" ");

console.log(newArr);
