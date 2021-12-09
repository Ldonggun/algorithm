let arr1 = [
  [1, 2],
  [2, 3],
];
let arr2 = [
  [3, 4],
  [5, 6],
];

// function solution(arr1, arr2) {
//   let B = [];
//   for (let i = 0; i < arr1.length; i++) {
//     let A = [];
//     for (let j = 0; j < arr1.length; j++) {
//       A.push(arr1[i][j] + arr2[i][j]);
//     }
//     B.push(A);
//   }
//   console.log(B);
// }

function solution(arr1, arr2) {
  let answer = [[]];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return console.log(answer);
}
solution(arr1, arr2);
