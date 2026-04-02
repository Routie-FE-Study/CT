// const readline = require('fs').readFileSync(0, 'utf-8').trim();
const readline = `
3
8
0 0
7 0
100
0 0
30 50
10
1 1
1 1
`;


const input = readline.trim().split("\n");

const T = Number(input[0]);
let idx = 1;

for (let i = 0; i < T; i++) {
  const n = Number(input[idx++]);
  const [sx, sy] = input[idx++].split(' ').map(Number);
  const [ex, ey] = input[idx++].split(' ').map(Number);
  console.log(bfs(n, sx, sy, ex, ey));
}

function bfs(n, sx, sy, ex, ey) {
  if (sx === ex && sy === ey) return 0; // 시작 = 끝이면 이동 0번


  const visited = Array.from({ length: n }, () => new Array(n).fill(false));

  const queue = [[sx, sy, 0]]; // 큐에 [x, y, 이동횟수] 시작점 삽입
  visited[sx][sy] = true;


  const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
  const dy = [-1, 1, -2, 2, -2, 2, -1, 1];

  let head = 0;
  while (head < queue.length) {
    const [x, y, cnt] = queue[head++];

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 체스판 범위 안 && 아직 방문 안 했으면
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny]) {
        if (nx === ex && ny === ey) return cnt + 1; // 목적지 도달
        visited[nx][ny] = true;        // 방문 처리
        queue.push([nx, ny, cnt + 1]); // 큐에 추가
      }
    }
  }
}