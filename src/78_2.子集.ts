function subsets(nums: number[]): number[][] {
  const r: number[][] = [];
  const path: number[] = [];

  const backtracking = (start: number) => {
    r.push(path.slice());

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  };

  backtracking(0);

  return r;
}

const r = subsets([1, 2, 3]);
console.log(r);

export {};
