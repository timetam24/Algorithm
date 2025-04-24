let fs = require(`fs`);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `./baekjoon/input.txt`;
let input = fs.readFileSync(filePath).toString().trim();
// let input = fs.readFileSync(filePath).toString().split(` `)
//let input = fs.readFileSync(filePath).toString().split(`\n`)
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})

const counts = Array(26).fill(0);

for (const char of input) {
  const index = char.charCodeAt(0) - 97;
  counts[index]++;
}

console.log(counts.join(" "));
// 시간 복잡도: O(N)
