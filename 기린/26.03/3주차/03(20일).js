function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const count = Array(3).fill(0);

  for (let i = 0; i < answers.length; i++) {
    const f = i % one.length;
    const s = i % two.length;
    const t = i % three.length;

    if (answers[i] === one[f]) count[0] += 1;
    if (answers[i] === two[s]) count[1] += 1;
    if (answers[i] === three[t]) count[2] += 1;
  }

  const max = Math.max(...count);

  const result = [];
  count.forEach((n, idx) => {
    if (n === max) result.push(idx + 1);
  });
  return result;
}

