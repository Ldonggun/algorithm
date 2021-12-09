const arr = [10];

function solution(arr) {
  let minNum = Math.min(...arr);
  let answer = arr.filter(el => el !== minNum);
  if (arr.length < 2) {
    return [-1];
  } else {
    return answer;
  }
}
console.log(solution(arr));
