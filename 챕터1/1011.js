const fs = require('fs');
const input = fs.readFileSync('ex.txt').toString().trim().split(/\s/);
const testCaseNum = Number(input[0]);
const n_arr = input.slice(1, n + 1);
const [m, ...m_arr] = input.slice(n + 1);
