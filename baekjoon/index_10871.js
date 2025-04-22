let fs = require(`fs`);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `./baekjoon/input.txt`;
// let input = fs.readFileSync(filePath).toString().trim()
// let input = fs.readFileSync(filePath).toString().split(` `)
let input = fs.readFileSync(filePath).toString().split(`\n`);
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .split(` `)
//   .map(function (a) {
//     return +a;
//   });

const result = [];

const [N, X] = input[0].split(` `);
const array = input[1].split(` `).map(Number);

for (let i = 0; i < N; i++) {
  if (array[i] < X) {
    result.push(array[i]);
  }
}

console.log(result.join(` `));
