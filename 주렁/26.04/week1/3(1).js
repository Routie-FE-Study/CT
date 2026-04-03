function solution(s) {
  s = s.toLowerCase();
  return s.split('p').length === s.split('y').length;
}
