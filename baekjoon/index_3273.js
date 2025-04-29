let fs = require(`fs`);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `./baekjoon/input.txt`;
// let input = fs.readFileSync(filePath).toString().trim()
// let input = fs.readFileSync(filePath).toString().split(` `)
let [_, numbers, x] = fs.readFileSync(filePath).toString().split(`\n`);
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})

x = Number(x);
const arr = numbers.split(" ").map(Number);

const set = new Set();
let count = 0;

for (const num of arr) {
  if (set.has(x - num)) {
    count++;
  }
  set.add(num);
}

console.log(count);
