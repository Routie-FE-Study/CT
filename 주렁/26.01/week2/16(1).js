function solution(citations) {
  const sortedCitiations = citations.sort((a, b) => b - a);

  let h = 0;
  for (let i = 0; i < sortedCitiations.length; i++) {
    if (sortedCitiations[i] >= i + 1) {
      h = i + 1;
    } else break;
  }
  return h;
}
