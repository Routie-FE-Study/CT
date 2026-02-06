function solution(arr) {
  const stack = [];

  for (const num of arr) {
    if (stack.length === 0) {
      stack.push(num);
    }
    if (stack[stack.length - 1] !== num) {
      stack.push(num);
    }
  }

  return stack;
}