const n = 123;

function solution(n) {
  const arr = [...(n + '')];
  const arrN = arr.map(el => el * 1);
  const sum = arrN.reduce((a, b) => a + b);
  return sum;
}

solution(n);
