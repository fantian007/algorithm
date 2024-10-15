function permute(nums: number[]): number[][] {
  const r: number[][] = [];

  const backtracking = (path: number[]) => {
    if (path.length === nums.length) {
      r.push(path.slice());
      return;
    }

    for (let j = 0; j < nums.length; j++) {
      const v = nums[j];

      // 直接 include 排除使用过的元素
      if (!path.includes(v)) {
        path.push(v);
        backtracking(path);
        path.pop();
      }
    }
  }

  backtracking([]);

  return r;
}
