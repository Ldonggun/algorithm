const n = 1;

function solution(n) {
  if (n === 1) return 0;
  let count = 0;
  let number = n;
  do {
    if (number % 2 === 0) {
      number = number / 2;
      count++;
    } else if (number % 2 !== 0) {
      number = number * 3 + 1;
      count++;
    }
  } while (number !== 1);
  if (count > 500) {
    return -1;
  } else {
    return count;
  }
}
console.log(solution(n));
