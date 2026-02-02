function solution(sizes) {
  let width = 0;
  let height = 0;
  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > width) width = a;
    if (b > height) height = b;
  });
  return width * height;
}
