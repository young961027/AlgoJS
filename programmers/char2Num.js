function solution(s) {
  let map = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  for (let i = 0; i < map.length; i++) {
    while (s.indexOf(map[i]) !== -1) s = s.replace(map[i], i.toString());
  }
  return parseInt(s);
}
