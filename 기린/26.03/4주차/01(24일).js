// const readline = require('fs').readFileSync(0, 'utf-8').trim();
const readline = `
5
3 1 4 3 2
`;

const input = readline.trim().split("\n");

const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

let sum = 0;
let res = 0;

numbers.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  sum += numbers[i];
  res += sum;
}

console.log(res);