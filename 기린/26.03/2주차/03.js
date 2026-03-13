function solution(numbers) {
  const strings = numbers.map(num => num.toString());

  strings.sort((a, b) => (b + a) - (a + b));

  // "000..." 인 경우 엣지케이스 처리
  if (strings[0] === '0') return '0';

  return strings.join('');
}