let fs = require(`fs`);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `./baekjoon/input.txt`;
// let input = fs.readFileSync(filePath).toString().trim()
let input = +fs.readFileSync(filePath).toString().trim();
//let input = fs.readFileSync(filePath).toString().split(`\n`)
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})

const a = Array(10).fill(0);

while (input > 0) {
  a[input % 10]++;
  input = Math.floor(input / 10);
}

let ans = 0;

for (let i = 0; i < 10; i++) {
  if (i === 6 || i === 9) continue;
  ans = Math.max(ans, a[i]);
}

ans = Math.max(ans, Math.floor((a[6] + a[9] + 1) / 2));

console.log(ans);
