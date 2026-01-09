const readline = require('fs').readFileSync('dev/stdin').toString().trim();
// const readline = `
// 6 5
// 1 1 0 1 1
// 0 1 1 0 0
// 0 0 0 0 0
// 1 0 1 1 1
// 0 0 1 1 1
// 0 0 1 1 1
// `;
// // 
const input = readline.trim().split("\n");
const [n, ...rawArr] = input;

const [row, col] = n.trim().split(' ').map(Number);

const grid = rawArr.map(line => line.trim().split(' ').map(Number))

const visited = Array.from({ length: row }, () => Array(col).fill(false));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function bfs(startX, startY) {
  const queue = [];

  queue.push([startX, startY]);
  visited[startX][startY] = true;

  let area = 1;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i += 1) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= row || ny < 0 || ny >= col) continue;
      if (visited[nx][ny]) continue;
      if (grid[nx][ny] === 0) continue;

      visited[nx][ny] = true;
      queue.push([nx, ny]);
      area += 1;
    }
  }
  return area;
}

let count = 0
let maxArea = 0;

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (grid[i][j] === 1 && !visited[i][j]) {
      count++;
      const area = bfs(i, j);
      if (area > maxArea) maxArea = area;
    }
  }
}

console.log(count);
console.log(maxArea);