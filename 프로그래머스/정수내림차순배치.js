const n = 118372;

function solution(n) {
  let arr = [...String(n)];
  arr = arr.sort((a, b) => b - a);
  return parseInt(arr.reduce((a, b) => a + b));
}

console.log(solution(n));
