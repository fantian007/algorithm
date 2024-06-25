function permuteUnique(nums: number[]): number[][] {
  const r: number[][] = [];
  const path: number[] = [];

  const backtracking = (used: number[]) => {
    if (path.length === nums.length) {
      r.push(path.slice());
      return;
    }

    const s = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
      // 树层去重
      if (s.has(nums[i])) {
        continue;
      }

      // 树枝去重
      if (used[i] === 1) {
        continue;
      }

      // 树层不用 pop
      s.add(nums[i]);
      // 同一树枝上 used[i] 都等于 1
      used[i] = 1;

      path.push(nums[i]);
      backtracking(used);
      path.pop();

      // 同一树层上 used[i] 都等于 0
      used[i] = 0;
    }
  };

  backtracking([]);

  return r;
}

const r = permuteUnique([1, 2, 1]);
// const r = permuteUnique([1, 2, 3]);
console.log(r);

export {};
