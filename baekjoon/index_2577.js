let fs = require(`fs`);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `./baekjoon/input.txt`;
// let input = fs.readFileSync(filePath).toString().trim()
// let input = fs.readFileSync(filePath).toString().split(` `)
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(`\n`)
  .map(function (a) {
    return +a;
  });
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})

const multiply = (input[0] * input[1] * input[2]).toString();
const result = Array(10).fill(0);
for (const digit of multiply) {
  result[digit]++;
}
console.log(result.join(`\n`));
// 시간 복잡도: O(N)
