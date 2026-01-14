const readline = require('fs').readFileSync(0, 'utf-8').trim();

const input = readline.trim().split("\n");
const [...rawArr] = input[0].split(' ').map(Number);

let A = BigInt(rawArr[0]);
let B = BigInt(rawArr[1]);
const C = BigInt(rawArr[2]);


function pow(a, b) {
  if (b === 1n) return a % C;

  const half = pow(a, b / 2n);
  let result = (half * half) % C;

  if (b % 2n === 1n) {
    result = (result * a) % C;
  }

  return result;
}

console.log(pow(A, B).toString());