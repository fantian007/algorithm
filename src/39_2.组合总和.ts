function combinationSum(candidates: number[], target: number): number[][] {
  const r: number[][] = [];

  const backtracking = (path: number[], start: number) => {
    // 存在重复计算，耗时长
    const sum = path.reduce((a, b) => a + b, 0);

    if (sum > target) {
      return;
    } else if (sum === target) {
      r.push(path.slice());
    } else {
      for (let i = start; i < candidates.length; i++) {
        path.push(candidates[i]);

        // 允许重复传 i, 不允许重复传 i + 1
        backtracking(path, i);

        path.pop();
      }
    }
  };

  backtracking([], 0);

  return r;
}

// const r = combinationSum([2, 3, 6, 7], 7);
const r = combinationSum([2, 3, 5], 8);

console.log(r);

export {};
