const input =
  process.platform === 'linux'
    ? require('fs').readFileSync('ex.txt').toString().trim().split('\n')
    : [];
