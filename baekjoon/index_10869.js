let fs = require(`fs`);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `./baekjoon/input.txt`;
// let input = fs.readFileSync(filePath).toString().trim()
let [firstValue, secondValue] = fs.readFileSync(filePath).toString().split(` `);
// let input = fs.readFileSync(filePath).toString().split(`\n`);
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})

firstValue = Number(firstValue);
secondValue = Number(secondValue);

const sum = firstValue + secondValue;
const sub = firstValue - secondValue;
const mul = firstValue * secondValue;
const div = Math.floor(firstValue / secondValue);
const mod = firstValue % secondValue;

console.log(`${sum}\n${sub}\n${mul}\n${div}\n${mod}`);
