function solution(clothes) {
  const map = new Map();

  for (const [cloth, category] of clothes) {
    map.set(category, (map.get(category) || 0) + 1)
  }

  let res = 1;

  for (const [_key, value] of map) {
    res *= value + 1;
  }

  return res - 1;
}