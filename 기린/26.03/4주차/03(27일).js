// const readline = require('fs').readFileSync(0, 'utf-8').trim();
const readline = `
3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton
`;

const input = readline.trim().split("\n");

const [N, M] = input[0].split(' ').map(Number);

const count = new Map();

for (let i = 1; i <= N; i++) {
  count.set(input[i], (count.get(input[i]) || 0) + 1);
}

for (let i = N + 1; i <= N + M; i++) {
  count.set(input[i], (count.get(input[i]) || 0) + 1);
}

const dutbojap = []

count.forEach((value, key) => {
  if (value > 1) {
    dutbojap.push(key);
  }
});

console.log(dutbojap.length);
console.log(dutbojap.sort().join('\n'));
