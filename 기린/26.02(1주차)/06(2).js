function solution(string) {
  const stack = [];

  for (const s of string) {
    if (s === '(') {
      stack.push(s);
    } else {
      if (stack.length === 0) {
        return false;
      } else if (stack[stack.length - 1] === '(') {
        stack.pop();
      }
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}