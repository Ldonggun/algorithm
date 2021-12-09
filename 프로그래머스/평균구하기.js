const arr = [5, 5];

function solution(arr) {
  let sum = arr.reduce((a, b) => a + b);
  let elCount = arr.length;
  return sum / elCount;
}
console.log(solution(arr));
