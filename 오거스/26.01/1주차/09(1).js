const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('./오거스/26.01(1주차)/09(1).txt').toString().trim().split('\n');

const n = parseInt(input[0]);
let maxScore = 0;

for (let i = 1; i <= n; i++) {
    const scores = input[i].split(' ').map(Number);
    
    const runs = scores.slice(0, 2);
    const bestRun = Math.max(...runs);
    
    const tricks = scores.slice(2, 7);
    tricks.sort((a, b) => b - a);
    const topTricks = tricks[0] + tricks[1];
    
    const finalScore = bestRun + topTricks;
    maxScore = Math.max(maxScore, finalScore);
}

console.log(maxScore);