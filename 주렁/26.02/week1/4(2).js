function solution(progresses, speeds) {
  const queue = [];
  const answer = [];

  for (let i = 0; i < progresses.length; i++) {
    let remainingWork = 100 - progresses[i];
    let days = Math.ceil(remainingWork / speeds[i]);
    queue.push(days);
  }

  while (queue.length > 0) {
    const firstDay = queue.shift();
    let count = 1;

    while (queue.length > 0 && queue[0] <= firstDay) {
      queue.shift();
      count++;
    }
    answer.push(count);
  }
  return answer;
}
