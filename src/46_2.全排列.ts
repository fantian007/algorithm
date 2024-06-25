function permute(nums: number[]): number[][] {
  const r: number[][] = [];
  const path: number[] = [];

  // 判断深度是否使用过相同元素，用 used 数组
  const backtracking = (used: number[]) => {
    if (path.length === nums.length) {
      r.push(path.slice());
      return;
    }

    // 要取当前元素前面的元素，从 0 开始
    // 不能取之前的元素，定义 start 变量
    for (let i = 0; i < nums.length; i++) {
      if (used.includes(nums[i])) {
        continue;
      }

      used.push(nums[i]);

      path.push(nums[i]);
      backtracking(used);
      path.pop();

      used.pop();
    }
  };

  backtracking([]);

  return r;
}

const r = permute([1, 2, 3]);
console.log(r);

export {};
