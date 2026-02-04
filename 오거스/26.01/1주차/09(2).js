const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('./09(2).txt').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);

const scores = input[1].split(' ').map(Number).sort((a, b) => b - a);

const topScores = scores.slice(0, k);

const cutLineScore = topScores[k - 1];

console.log(topScores)
console.log(cutLineScore);
