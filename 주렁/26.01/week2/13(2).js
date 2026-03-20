function solution(numbers) {
  const strNumbers = numbers.map(String);
  strNumbers.sort((a, b) => {
    const A = a + b;
    const B = b + a;
    return B.localeCompare(A);
  });
  const answer = strNumbers.join('');

  return answer[0] === '0' ? '0' : answer;
}
