function solution(nums) {
  const set = new Set(nums);

  const selectCnt = nums.length / 2;

  const type = set.size

  return Math.min(selectCnt, type);
}