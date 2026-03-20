function solution(a, b) {
  const date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  let totalDate = 0;
  for (let i = 0; i < a - 1; i++) {
    totalDate += date[i];
  }
  totalDate += b;
  return day[(totalDate - 1) % 7];
}
