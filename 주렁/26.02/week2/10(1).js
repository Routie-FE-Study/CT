function solution(babbling) {
  const sample = ['aya', 'ye', 'woo', 'ma'];
  let count = 0;
  for (let i = 0; i < babbling.length; i++) {
    let word = babbling[i];
    for (const s of sample) {
      word = word.replace(s, ' ');
    }
    if (word.trim() === '') {
      count++;
    }
  }
  return count;
}
