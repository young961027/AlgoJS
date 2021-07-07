function solution(nums) {
  let answer = 0;
  let len = nums.length / 2;
  let kinds = [];
  for (let i = 0; i < nums.length; i++) {
    if (kinds.indexOf(nums[i]) === -1) kinds.push(nums[i]);
  }
  let kind = kinds.length;
  return Math.min(kind, len);
}
