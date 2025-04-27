function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  const backtrack = (path: number[], start: number, sum: number) => {
    if (sum > target) {
      return;
    }

    if (sum === target) {
      res.push(path.slice());
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      sum += candidates[i];

      // 防止重复结果，使用 start
      // 元素支持重复取，传 i; 不支持重复取，传 i + 1
      backtrack(path, i, sum);

      path.pop();
      sum -= candidates[i];
    }
  }

  backtrack([], 0, 0);

  return res;
};

export {}
