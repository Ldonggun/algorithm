const n = 3;

function solution(n) {
  let x = parseInt(Math.sqrt([n]));
  return Math.pow([x], 2) !== n ? -1 : Math.pow([x + 1], 2);
}

console.log(solution(n));
