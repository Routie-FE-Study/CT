const readline = require('fs').readFileSync('dev/stdin').toString().trim();

const input = readline.trim().split("\n");
const [n, ...rawArr] = input;
// ---
const N = Number(n);
// const numbers = m.split(' ').map(Number);
const arr = rawArr.map((el) => el.split(''));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];


// 적록 색약이 아닌사람은 넓이 우선 탐색으로 R, B, G, R 을 구분해서 영역을 나눈다.


function bfsForNormal(x, y, visited) {
  const queue = [[x, y]];
  let head = 0;
  visited[x][y] = true;

  while (head < queue.length) {
    const [x, y] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
      if (visited[nx][ny]) continue;
      if (arr[nx][ny] !== arr[x][y]) continue;
      visited[nx][ny] = true;
      queue.push([nx, ny]);

    }
  }
}

// 적록 색약인 사람은 R, G 를 같은 색으로 보고 넓이 우선 탐색으로 영역을 나눈다.
function bfsForColorWeakness(x, y, visited) {
  const queue = [[x, y]];
  let head = 0;
  visited[x][y] = true;

  const isRG = (c) => c === "R" || c === "G";

  while (head < queue.length) {
    const [x, y] = queue[head++];
    const curColor = arr[x][y];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];


      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
      if (visited[nx][ny]) continue;

      const nextColor = arr[nx][ny];
      const sameArea = (isRG(curColor) && isRG(nextColor) || !isRG(curColor) && nextColor === curColor);

      if (!sameArea) continue;
      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }

}

let normalCount = 0;
let colorWeaknessCount = 0;

const normalVisited = Array.from({ length: N }, () => Array(N).fill(false));
const colorWeaknessVisited = Array.from({ length: N }, () => Array(N).fill(false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!normalVisited[i][j]) {
      bfsForNormal(i, j, normalVisited);
      normalCount++;
    }

    if (!colorWeaknessVisited[i][j]) {
      bfsForColorWeakness(i, j, colorWeaknessVisited);
      colorWeaknessCount++;
    }
  }
}


console.log(normalCount);
console.log(colorWeaknessCount);