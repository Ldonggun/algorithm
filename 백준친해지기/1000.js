const fs = require('fs');

const input = fs.readFileSync('ex.txt').toString().split('');

var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a + b);
