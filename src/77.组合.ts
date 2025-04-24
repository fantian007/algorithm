function combine(n: number, k: number): number[][] {
  const nums = Array.from({ length: n }, (i, v) => v + 1);
  const res: number[][] = [];

  const backtrack = (path: number[], start: number) => {
    if (path.length === k) {
      res.push(path.slice());
    }

    for (let i = start; i < nums.length; i++) {
      const n = nums[i];

      path.push(n);

      backtrack(path, i + 1);

      path.pop();
    }
  }

  backtrack([], 0);

  return res;
};

