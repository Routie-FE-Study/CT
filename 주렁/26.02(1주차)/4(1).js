function solution(arr) {
  return arr.filter((num, index) => {
    return (index === 0) | (num != arr[index - 1]);
  });
}
