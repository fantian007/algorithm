function subsetsWithDup(nums: number[]): number[][] {
  const r: number[][] = [];
  const path: number[] = [];

  nums = nums.sort((a, b) => a - b);

  const backtracking = (start: number) => {
    r.push(path.slice());

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }

      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  };

  backtracking(0);

  return r;
}

const r = subsetsWithDup([1, 2, 2]);
console.log(r);

export {};
