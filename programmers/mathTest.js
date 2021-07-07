function grading(std, answers) {
  let count = 0;
  for (let i = 0; i < answers.length; i++) {
    let ans = i % std.length;
    if (std[ans] === answers[i]) count++;
  }
  return count;
}
function solution(answers) {
  let answer = [];
  let std1 = [1, 2, 3, 4, 5];
  let std2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let std3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score = [];
  score.push(grading(std1, answers));
  score.push(grading(std2, answers));
  score.push(grading(std3, answers));
  let max = Math.max(...score);
  console.log(score);
  for (let i = 0; i < 3; i++) {
    if (max === score[i]) answer.push(i + 1);
  }
  return answer;
}
