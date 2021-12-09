const n = 2;
const m = 5;

const gcd = (a, b) => {
  let r;
  while (a % b > 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return b;
};

function solution(n, m) {
  let arr = [n, m].sort((a, b) => b - a);
  let a = arr[0];
  let b = arr[1];
  let max = gcd(a, b);
  let min = (a * b) / gcd(a, b);
  return console.log([max, min]);
}

solution(n, m);

//   let arr = [n, m].sort((a, b) => b - a);
//   console.log(arr);
//   let a = arr[0];
//   let b = arr[1];
//   let r = '';
//   let lcm = '';
//   do {
//     if (a % b !== 0) {
//       r = a % b;
//       a = b;
//       b = r;
//       console.log(r, a, b);
//     } else if (a % b === 0) {
//       lcm = b;
//     }
//     console.log(lcm);
//   } while (a % b !== 0);
// }
