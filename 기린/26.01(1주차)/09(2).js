let count = 0;

function dfs(idx, sum, target, numbers) {
  if (idx === numbers.length) {
    if (sum === target) {
      count += 1;
    }
    return;
  }
  dfs(idx + 1, sum + numbers[idx], target, numbers)
  dfs(idx + 1, sum - numbers[idx], target, numbers)
}

function solution(numbers, target) {
  const sum = 0;
  dfs(0, sum, target, numbers);
  return count;
}