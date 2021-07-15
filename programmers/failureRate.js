function solution(N, stages) {
  let answer = [];
  let clear = Array.from({ length: N }, () => 0);
  let challenge = Array.from({ length: N }, () => 0);
  let failureRate = new Map();
  for (let stage of stages) {
    for (let i = 0; i < stage; i++) {
      clear[i] += 1;
    }
    if (stage !== N + 1) challenge[stage - 1]++;
  }
  for (let i = 0; i < N; i++) {
    if (challenge[i] === 0) failureRate.set(i + 1, 1);
    else {
      failureRate.set(i + 1, clear[i] / (clear[i] + challenge[i]));
    }
  }
  let result = new Map([...failureRate.entries()].sort((a, b) => a[1] - b[1]));
  for (let [key, value] of result) answer.push(key);
  return answer;
}
