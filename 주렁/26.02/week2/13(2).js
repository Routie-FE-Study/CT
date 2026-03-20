function solution(lines) {
  const arr = Array(201).fill(0);
  for (const [start, end] of lines) {
    for (let i = start; i < end; i++) {
      arr[i + 100]++;
    }
  }

  return arr.filter((v) => v >= 2).length;
}
