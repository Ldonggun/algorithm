function solution(n, edge) {
  var answer = 0;
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [index, dest] of edge) {
    graph[index].push(dest);
    graph[dest].push(index);
  }

  const distance = Array.from({ length: n + 1 }).fill(0);
  distance[1] = 1;

  const queue = [1];
  while (queue.length > 0) {
    const start = queue.shift();
    console.log({ start });
    for (const dest of graph[start]) {
      if (distance[dest] === 0) {
        queue.push(dest);
        distance[dest] = distance[start] + 1;
      }
    }
  }
  const max = Math.max(...distance);
  answer = distance.filter((item) => item === max).length;
  return answer;
}

let n = 6;
let edge = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];
const a = solution(n, edge);
console.log(a);
