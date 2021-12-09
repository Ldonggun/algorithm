const data = [2, 5];
const x = Number(data[0]),
  n = Number(data[1]);
// function solution(x, n) {
//   let answer = [];
//   for (let i = 1; i < n + 1; i++) {
//     answer.push(x * i);
//   }
//   return console.log(answer);
// }
// solution(2, 5);
function solution(x, n) {
  return console.log(
    Array(n)
      .fill(x)
      .map((v, i) => (i + 1) * v),
  );
}
solution(2, 5);
