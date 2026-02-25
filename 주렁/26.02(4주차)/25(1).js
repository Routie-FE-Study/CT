function solution(numer1, denom1, numer2, denom2) {
  const numer = numer1 * denom2 + numer2 * denom1;
  const denom = denom1 * denom2;

  let result = 1;

  for (let i = 2; i <= Math.min(numer, denom); i++) {
    if (numer % i == 0 && denom % i == 0) {
      result = i;
    }
  }
  return [numer / result, denom / result];
}
