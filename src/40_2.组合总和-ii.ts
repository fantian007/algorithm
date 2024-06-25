function combinationSum2(candidates: number[], target: number): number[][] {
  const r: number[][] = [];

  candidates = candidates.sort((a, b) => a - b);

  const backtracking = (path: number[], start: number) => {
    const sum = path.reduce((a, b) => a + b, 0);

    if (sum > target) {
      return;
    } else if (sum === target) {
      r.push(path.slice());
    } else {
      for (let i = start; i < candidates.length; i++) {
        /**
         * [1,1,2,5]的3位数组合：[1,2,5] 和 [1,2,5] 是重复的，如何不重复？
         * i > start 保留第一个 1，当遇到第 2 个 1，跳过
         */
        if (i > start && candidates[i] === candidates[i - 1]) {
          continue;
        }

        path.push(candidates[i]);

        backtracking(path, i + 1);

        path.pop();
      }
    }
  };

  backtracking([], 0);

  return r;
}

const r = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
// const r = combinationSum2([2, 5, 2, 1, 2], 5);

console.log(r);

export {};
