const input = require('fs')
  .readFileSync('ex.txt')
  .toString()
  .trim()
  .split('\r\n');

let T = parseInt(input[0]); //입력개수

for (let i = 1; i < T + 1; i++) {
  let arr = input[i].split(' ');
  let h = Number(arr[0]);
  let w = Number(arr[1]);
  let n = Number(arr[2]);
  if (n % h === 0) {
    if (Math.floor(n / h) < 10) {
      console.log(String(h) + '0' + String(Math.floor(n / h)));
    } else {
      console.log(String(h) + String(Math.floor(n / h)));
    }
  } else {
    if (Math.floor(n / h) + 1 < 10) {
      console.log(String(n % h) + '0' + String(Math.floor(n / h) + 1));
    } else {
      console.log(String(n % h) + String(Math.floor(n / h) + 1));
    }
  }
}

// if (Math.ceil(x[2] / x[0]) + 1 > 9) {
//   console.log((x[2] % x[0]) + (Math.ceil(x[2] / x[0]) + 1));
// } else if (Math.ceil(x[2] / x[0]) + 1 < 10) {
//   console.log((x[2] % x[0]) + '0' + Math.ceil(x[2] / x[0]));
// } else if (Math.ceil(x[2] % x[0]) == 0) {
//   console.log(x[0] + '0' + Math.ceil(x[2] / x[0]));
// }
