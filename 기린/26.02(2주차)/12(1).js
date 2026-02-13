function solution(food) {
  let left = '';

  for (let i = 1; i < food.length; i++) {
    const count = Math.floor(food[i] / 2);
    left += String(i).repeat(count);
  }

  const right = left.split('').reverse().join('');

  return left + '0' + right;
}