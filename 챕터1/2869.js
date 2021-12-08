const input = require('fs').readFileSync('ex.txt').toString().trim().split(' ');

console.log(input);
const A = input[0];
const B = input[1];
const V = input[2];

// console.log(V / (A - B)); // 높이 / 하루에 실제로 올라가는 높이
console.log(Math.ceil((V - B) / (A - B)));
