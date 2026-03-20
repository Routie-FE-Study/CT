// 1번 풀이
function solution(nums) {
  const map = new Map();
  let maxSize = nums.length / 2;
  nums.forEach((num) => map.set(num, (map.get(num) || 0) + 1));

  return map.size > maxSize ? maxSize : map.size;
}

// 2번 풀이
function solution(nums) {
  const maxSelect = nums.length / 2;
  const typeSet = new Set(nums);

  return Math.min(maxSelect, typeSet.size);
}
