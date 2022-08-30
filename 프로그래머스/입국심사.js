function solution(n, times) {
  let answer = 0;
  let left = times[0];
  let right = n * times[times.length - 1];
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    let cnt = times.reduce((a, b) => Math.floor(mid / b) + a, 0); // 인원수
    if (n <= cnt) {
      right = mid - 1;
    } else if (n > cnt) {
      left = mid + 1;
    }

    mid = Math.floor((left + right) / 2);
  }
  answer = left;
  return answer;
}

let n = 6;
let times = [7, 10];

const a = solution(n, times);
console.log(a);
