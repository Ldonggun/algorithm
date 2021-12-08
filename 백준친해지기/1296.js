const input =
  process.platform === 'linux'
    ? require('fs').readFileSync('ex.txt').toString().trim().split('\n')
    : ['MERYLOV', 5, 'JOHN', 'DAVE', 'STEVE', 'JOHN', 'DAVE'];

// L = 연두의 이름과 팀 이름에서 등장하는 L의 개수
// O = 연두의 이름과 팀 이름에서 등장하는 O의 개수
// V = 연두의 이름과 팀 이름에서 등장하는 V의 개수
// E = 연두의 이름과 팀 이름에서 등장하는 E의 개수

let yunDo = input[0];

let team = [];
for (let i = 2; i < input.length; i++) {
  team.push(input[i]);
}
team.sort();

let N = parseInt(input[1]);
let array = [];

for (let i = 0; i < N; i++) {
  let L =
    (yunDo.match(/L/g)?.length ? yunDo.match(/L/g).length : 0) +
    (team[i].match(/L/g)?.length ? team[i].match(/L/g).length : 0);
  let O =
    (yunDo.match(/O/g)?.length ? yunDo.match(/O/g).length : 0) +
    (team[i].match(/O/g)?.length ? team[i].match(/O/g).length : 0);
  let V =
    (yunDo.match(/V/g)?.length ? yunDo.match(/V/g).length : 0) +
    (team[i].match(/V/g)?.length ? team[i].match(/V/g).length : 0);
  let E =
    (yunDo.match(/E/g)?.length ? yunDo.match(/E/g).length : 0) +
    (team[i].match(/E/g)?.length ? team[i].match(/E/g).length : 0);
  array.push(((L + O) * (L + V) * (L + E) * (O + V) * (O + E) * (V + E)) % 100);
}
console.log(team[array.indexOf(Math.max(...array))]);

// input.splice(1, 1);
// let L =
//   input.join('').match(/L/g) !== null ? input.join('').match(/L/g).length : 0;
// let O =
//   input.join('').match(/O/g) !== null ? input.join('').match(/O/g).length : 0;
// let V =
//   input.join('').match(/V/g) !== null ? input.join('').match(/V/g).length : 0;
// let E =
//   input.join('').match(/E/g) !== null ? input.join('').match(/E/g).length : 0;
// console.log(L, O, V, E);
// let percentage =
//   ((L + O) * (L + V) * (L + E) * (O + V) * (O + E) * (V + E)) % 100;

// console.log(percentage);
// let L = 연두이름.match(/L/g) && 연두이름.match(/L/g).length;

// let L = 연두이름.match(/L/g) !== null ? 연두이름.match(/L/g).length : 0;
// console.log(L);
// let O =
//   (연두이름.match(/O/g) !== null ? 연두이름.match(/O/g).length : 0) +
//   parseInt(
//     팀이름.map(el => (el.match(/O/g) !== null ? 팀이름.match(/O/g).length : 0)),
//   );
// console.log(O);
// let V = 연두이름.match(/V/g) !== null ? 연두이름.match(/V/g).length : 0;

// let E = 연두이름.match(/E/g) !== null ? 연두이름.match(/E/g).length : 0;

// for (let i = 2; i < input.length; i++) {
//   var L =
//     (input[0].match(/L/g) == null ? 0 : input[0].match(/L/g).length) +
//     (input[i].match(/L/g) == null ? 0 : input[i].match(/L/g).length);
//   var O =
//     (input[0].match(/O/g) == null ? 0 : input[0].match(/O/g).length) +
//     (input[i].match(/O/g) == null ? 0 : input[i].match(/O/g).length);
//   var V =
//     (input[i].match(/V/g) == null ? 0 : input[0].match(/V/g).length) +
//     (input[i].match(/V/g) == null ? 0 : input[i].match(/V/g).length);
//   var E =
//     (input[i].match(/E/g) == null ? 0 : input[0].match(/E/g).length) +
//     (input[i].match(/E/g) == null ? 0 : input[i].match(/E/g).length);
// }
// console.log(
//   input[((L + O) * (L + V) * (L + E) * (O + V) * (O + E) * (V + E)) % 100],
// );
