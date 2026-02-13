function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] < '0' || s[i] > '9') {
      return false;
    }
  }

  return true;
}

// 정규식도 풀이 가능하다고 함.
function solution(s) {
  return (s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s);
}