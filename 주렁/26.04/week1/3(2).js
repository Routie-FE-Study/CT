function solution(arr) {
  let min = Math.min(...arr);
  if (arr.length >= 2) {
    return arr.filter((v) => v !== min);
  } else return [-1];
}
