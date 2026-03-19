function solution(sizes) {
  // 먼저 지갑들 마다의 긴변, 짧은 변을 맞춘 다음에 비교 
  let width = 0;
  let height = 0;

  for (const [w, h] of sizes) {
    const long = Math.max(w, h);
    const short = Math.min(w, h);

    width = Math.max(width, long);
    height = Math.max(height, short);
  }

  return width * height;
}