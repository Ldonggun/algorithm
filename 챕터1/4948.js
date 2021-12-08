const input = require('fs')
  .readFileSync('ex.txt')
  .toString()
  .trim()
  .split('\r\n')
  .map(v => +v);

const max = Math.max(...input) * 2;

let prime = [];
for (let i = 0; i <= max; i++) {
  prime.push(true);
}
prime[0] = false;
prime[1] = false;

for (let i = 2; i * i <= max; i++) {
  if (prime[i]) {
    for (let j = i * i; j <= max; j += i) prime[j] = false;
  }
}

input.forEach(v => {
  const start = v;
  const end = v * 2;
  if (v > 0) {
    let cnt = 0;
    for (let i = start + 1; i <= end; i++) {
      if (prime[i] == true) {
        cnt++;
      }
    }
    console.log(cnt);
  }
});

// console.log(input);
// const Count = n => {
//   input.map(el => {
//     for (let i = n + 1; i < 2 * n + 1; i++) {
//       var count = 0;
//       if (i % 1 == 0 || i % i == 0) {
//         count += 1;
//       }
//     }
//   });
// };

// const Count = n => {
//   for (let i = n + 1; i < 2 * n + 1; i++) {
//     var count = 0;
//     if (i % 1 == 0 || i % i == 0) {
//       count += 1;
//     }
//   }
// };
