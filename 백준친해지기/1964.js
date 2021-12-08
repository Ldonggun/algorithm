const input = require('fs').readFileSync('ex.txt').toString().trim();

const N = Number(input);

// function range(start, end) {
//   let array = [];
//   for (let i = start; i < end; ++i) {
//     array.push(i);
//   }
//   return array;
// }

// for (i in range(1, N)) {
//   base += Count;
//   Count += 3;
// }

base = 5;
Count = 7;
for (let i = 1; i < N; i++) {
  base += Count;
  Count += 3;
}
console.log(base % 45678);
