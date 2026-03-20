function solution(priorities, location) {
  const queue = priorities.map((priority, index) => ({
    priority: priority,
    index: index,
  }));

  let count = 0;

  while (queue.length > 0) {
    const current = queue.shift();

    const hasHigherPriority = queue.some(
      (process) => process.priority > current.priority
    );

    if (hasHigherPriority) {
      queue.push(current);
    } else {
      count++;

      if (current.index === location) {
        return count;
      }
    }
  }
}
