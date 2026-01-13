// 문제 풀이 코드
function solutionA(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i in participant) {
    if (participant[i] != completion[i]) {
      return participant[i];
    }
  }
}

// 2명 이상을 찾는 변형 문제 풀이 코드
function solutionB(participant, completion) {
  participant.sort();
  completion.sort();

  const missing = [];
  let j = 0;

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[j]) {
      missing.push(participant[i]);
    } else {
      j++;
    }
  }

  return missing[0];
}

// map을 활용한 풀이 ⭐️
function solution(participant, completion) {
  const map = new Map();
  participant.forEach((name) => map.set(name, (map.get(name) || 0) + 1));
  completion.forEach((name) => map.set(name, map.get(name) - 1));

  for (let [name, count] of map) {
    if (count > 0) return name;
  }
}
