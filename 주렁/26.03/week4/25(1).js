function solution(n) {
  const string = String(n).split('');
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += Number(string[i]);
  }
  return sum;
}
