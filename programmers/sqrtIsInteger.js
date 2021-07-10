function solution(left, right) {
  let answer = 0;
  for (let target = left; target <= right; target++) {
    let tmp = Math.sqrt(target);
    if (Number.isInteger(tmp)) answer = answer - target;
    else answer = answer + target;
  }
  return answer;
}
