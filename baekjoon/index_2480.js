let fs = require(`fs`);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `./baekjoon/input.txt`;
// let input = fs.readFileSync(filePath).toString().trim()
let input = fs.readFileSync(filePath).toString().split(` `);
//let input = fs.readFileSync(filePath).toString().split(`\n`)
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})

const [a, b, c] = input.map(Number);
const set = new Set([a, b, c]);

if (set.size === 1) {
  console.log(10000 + a * 1000);
} else if (set.size === 2) {
  const same = a === b || a === c ? a : b;
  console.log(1000 + same * 100);
} else {
  console.log(Math.max(a, b, c) * 100);
}
