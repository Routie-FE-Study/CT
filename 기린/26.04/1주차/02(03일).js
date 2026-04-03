function solution(k, score) {
  const MJ = [];
  const answer = [];

  for (let i = 0; i < score.length; i++) {
    MJ.push(score[i]);

    MJ.sort((a, b) => b - a);

    if (MJ.length > k) {
      MJ.pop();
    }

    answer.push(MJ[MJ.length - 1]);
  }

  return answer;
}