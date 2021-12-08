const [n, ...arr] = require('fs')
  .readFileSync('ex.txt')
  .toString()
  .trim()
  .split(/\s+/);
let input = [n, ...arr];
let callTime = [];
for (let i = 1; i < input.length; i++) {
  callTime.push(input[i]);
}

let m = 0;
let y = 0;
for (let i = 0; i < callTime.length; i++) {
  y +=
    callTime[i] % 30 === 0
      ? (callTime[i] / 30 + 1) * 10
      : Math.ceil(callTime[i] / 30) * 10;
  m +=
    callTime[i] % 60 === 0
      ? (callTime[i] / 60 + 1) * 15
      : Math.ceil(callTime[i] / 60) * 15;
}
if (m > y) {
  console.log('Y', y);
} else if (m === y) {
  console.log('Y', 'M', y);
} else {
  console.log('M', m);
}
