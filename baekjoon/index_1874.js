let fs = require(`fs`);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `./baekjoon/input.txt`;
// let input = fs.readFileSync(filePath).toString().trim()
// let input = fs.readFileSync(filePath).toString().split(` `)
let input = fs.readFileSync(filePath).toString().split(`\n`).map(Number);
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})

const N = input[0];
const numbers = input.slice(1);

const result = (N, numbers) => {
  let stack = [];
  let result = "";
  let j = 0;

  for (let i = 1; i <= N; i++) {
    stack.push(i);
    result += "\n+";
    while (stack[stack.length - 1] === numbers[j]) {
      stack.pop();
      result += "\n-";
      j++;
      if (j === N) break;
    }
  }

  return stack.length === 0 ? result.slice(1) : "NO";
};

console.log(result(N, numbers));
