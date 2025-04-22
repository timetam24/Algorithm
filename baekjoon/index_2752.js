let fs = require(`fs`);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `./baekjoon/input.txt`;
// let input = fs.readFileSync(filePath).toString().trim()
let input = fs.readFileSync(filePath).toString().split(` `);
//let input = fs.readFileSync(filePath).toString().split(`\n`)
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})

const array = input.map(Number).sort((a, b) => a - b);
console.log(array.join(` `));
