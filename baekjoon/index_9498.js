let fs = require(`fs`);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `./baekjoon/input.txt`;
let input = fs.readFileSync(filePath).toString().trim();
// let input = fs.readFileSync(filePath).toString().split(` `)
//let input = fs.readFileSync(filePath).toString().split(`\n`)
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})

input = Number(input);
let score = "";

if (input >= 90 && input <= 100) {
  score = "A";
} else if (input >= 80 && input <= 89) {
  score = "B";
} else if (input >= 70 && input <= 79) {
  score = "C";
} else if (input >= 60 && input <= 69) {
  score = "D";
} else if (input <= 59 && input >= 0) {
  score = "F";
}
console.log(score);
// 시간 복잡도: O(1)
