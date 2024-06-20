function combinationSum3(k: number, n: number): number[][] {
  const arr: number[] = Array.from({ length: 9 }, (i, v) => v + 1);
  const r: number[][] = [];

  const backtracking = (path: number[], startIndex: number) => {
    // 终止条件
    if (path.length === k) {
      const sum = path.reduce((a, b) => a + b, 0);

      if (sum === n) {
        r.push(path.slice());
      }
    }

    // 回溯
    // 递归 + for 循环
    for (let i = startIndex; i < arr.length; i++) {
      path.push(arr[i]);
      backtracking(path, i + 1);
      path.pop();
    }
  };

  backtracking([], 0);

  return r;
}

const r = combinationSum3(3, 9);
console.log(r);

export {};
