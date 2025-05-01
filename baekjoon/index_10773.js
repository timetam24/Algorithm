let fs = require(`fs`);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `./baekjoon/input.txt`;
// let input = fs.readFileSync(filePath).toString().trim()
// let input = fs.readFileSync(filePath).toString().split(` `)
let input = fs.readFileSync(filePath).toString().split(`\n`).map(Number);
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})

const K = input[0];
const stack = [];

for (let i = 1; i <= K; i++) {
  const num = input[i];
  if (num === 0) {
    stack.pop();
  } else {
    stack.push(num);
  }
}

const sum = stack.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
