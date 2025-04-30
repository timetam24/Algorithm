let fs = require(`fs`);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `./baekjoon/input.txt`;
// let input = fs.readFileSync(filePath).toString().trim()
// let input = fs.readFileSync(filePath).toString().split(` `)
let input = fs.readFileSync(filePath).toString().split(`\n`);
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})

const stack = [];
const output = [];

for (const cmd of input) {
  if (cmd.startsWith("push")) {
    stack.push(cmd.split(" ")[1]);
  } else if (cmd === "pop") {
    output.push(stack.length ? stack.pop() : -1);
  } else if (cmd === "size") {
    output.push(stack.length);
  } else if (cmd === "empty") {
    output.push(stack.length ? 0 : 1);
  } else if (cmd === "top") {
    output.push(stack.length ? stack[stack.length - 1] : -1);
  }
}

console.log(output.join("\n"));
