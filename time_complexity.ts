function func1(N: number): number {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      count += i;
    }
  }
  return count;
}

// 1번 테스트 케이스
// console.log(func1(16));
// console.log(func1(34567));
// console.log(func1(27639));

function func2(arr: number[], N: number): 0 | 1 {
  const seen = new Set<number>();
  for (let i = 0; i < N; i++) {
    const complement = 100 - arr[i];
    if (seen.has(complement)) {
      return 1;
    }
    seen.add(arr[i]);
  }
  return 0;
  // 시간 복잡도: O(N)

  // for (let i = 0; i < N; i++) {
  //   for (let j = i + 1; j < N; j++) {
  //     if (arr[i] + arr[j] === 100) {
  //       return 1;
  //     }
  //   }
  // }
  // return 0;
  // 시간 복잡도: O(N²)
}

// 2번 테스트 케이스
// console.log(func2([1, 52, 48], 3)); // 1
// console.log(func2([50, 42], 2)); // 0
// console.log(func2([4, 13, 63, 87], 4)); // 1

function func3(N: number): 0 | 1 {
  let num = Math.sqrt(N);
  return Number.isInteger(num) ? 1 : 0;
  // 시간 복잡도: O(1)
}

// 3번 테스트 케이스
// console.log(func3(9)); // 1
// console.log(func3(693953651)); // 0
// console.log(func3(756580036)); // 1

function func4(N: number): number {
  let value = 1;
  while (2 * value <= N) {
    value *= 2;
  }
  return value;
  // 시간 복잡도: O(log N)
}

// 4번 테스트 케이스
console.log(func4(5)); // 4
console.log(func4(97615282)); // 67108864
console.log(func4(1024)); // 1024
