let fs = require(`fs`);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `./baekjoon/input.txt`;
// let input = fs.readFileSync(filePath).toString().trim()
// let input = fs.readFileSync(filePath).toString().split(` `)
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(`\n`)
  .map((a) => +a);
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})

const oddNumbers = input.filter((num) => num % 2 === 1);
if (oddNumbers.length === 0) {
  console.log(-1);
} else {
  console.log(oddNumbers.reduce((acc, cur) => acc + cur, 0));
  console.log(Math.min(...oddNumbers));
}
