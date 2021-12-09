const x = 11;

function solution(x) {
  let sum = (x + '')
    .split('')
    .map(Number)
    .reduce((a, b) => a + b);
  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
}

solution(x);
