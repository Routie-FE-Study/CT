function solution(n, m) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const g = gcd(n, m);
  return [g, (n * m) / g];
}
