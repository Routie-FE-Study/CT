function solution(brown, yellow) {
  const total = brown + yellow;

  for (let i = 1; i * i <= total; i++) {
    if (total % i === 0) {
      const height = i;
      const width = total / i;

      if ((width - 2) * (height - 2) === yellow) {
        return [width, height];
      }
    }
  }
}