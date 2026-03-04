function solution(common) {
  const n = common.length;
  if (common[n - 1] - common[n - 2] === common[n - 2] - common[n - 3]) {
    return common[n - 1] + common[n - 1] - common[n - 2];
  } else {
    return (common[n - 1] * common[n - 1]) / common[n - 2];
  }
}
