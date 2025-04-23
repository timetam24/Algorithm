let fs = require(`fs`);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `./baekjoon/input.txt`;
let input = fs.readFileSync(filePath).toString().trim();
// let input = fs.readFileSync(filePath).toString().split(` `)
//let input = fs.readFileSync(filePath).toString().split(`\n`)
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(isLeapYear(+input) ? 1 : 0);
// 시간 복잡도: O(1)
