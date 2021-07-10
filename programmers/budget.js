function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  let account = 0;
  for (let dpt of d) {
    account = account + dpt;
    if (account > budget) {
      return answer;
    } else if (account === budget) {
      return answer + 1;
    } else {
      answer++;
    }
  }
  return answer;
}
