const input = require('fs')
  .readFileSync('ex.txt')
  .toString()
  .trim()
  .split('\r\n');
let Colors = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

console.log(
  (Colors.indexOf(input[0]).toString() + Colors.indexOf(input[1]).toString()) *
    10 ** Colors.indexOf(input[2]),
);
