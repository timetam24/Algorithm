let fs = require(`fs`);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `./baekjoon/input.txt`;
// let input = fs.readFileSync(filePath).toString().trim()
// let input = fs.readFileSync(filePath).toString().split(` `)
let [firstArray, secondArray, thirdArray] = fs
  .readFileSync(filePath)
  .toString()
  .split(`\n`)
  .map((arr) => arr.split(` `).map(Number));
//let input = fs.readFileSync(filePath).toString().split(` `).map(function(a) {return +a})

const getResult = (array) => {
  let countZero = 0;
  let countOne = 0;

  for (let num of array) {
    if (num === 0) {
      countZero++;
    } else {
      countOne++;
    }
  }

  if (countZero === 0 && countOne === 3) {
    return "A";
  } else if (countZero === 2 && countOne === 2) {
    return "B";
  } else if (countZero === 3 && countOne === 1) {
    return "C";
  } else if (countZero === 4) {
    return "D";
  } else {
    return "E";
  }
};

console.log(getResult(firstArray));
console.log(getResult(secondArray));
console.log(getResult(thirdArray));
// 시간 복잡도: O(1)
