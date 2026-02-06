function solution(participant, completion) {
  const count = new Map();

  for (const name of participant) {
    count.set(name, (count.get(name) || 0) + 1);
  }

  for (const name of completion) {
    const nextCnt = count.get(name) - 1;
    if (nextCnt === 0) count.delete(name);
    else count.set(name, nextCnt);
  }

  for (const [name] of count) {
    return name;
  }
}