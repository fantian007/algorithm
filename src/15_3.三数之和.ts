// 回溯
function threeSum(nums: number[]): number[][] {
  const r: number[][] = [];

  // 排序，方便去重
  nums.sort((a, b) => a - b);

  const backtracking = (path: number[], sum = 0, start = 0) => {
    if (path.length === 3 && sum === 0) {
      r.push(path.slice());
      return;
    }

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;

      path.push(nums[i]);
      sum += nums[i];

      backtracking(path, sum, i + 1);

      path.pop();
      sum -= nums[i];
    }
  }

  backtracking([], 0, 0);

  return r;
};

const r = threeSum([1, -1, -1, 0]); // [[-1,0,1]]

console.log(JSON.stringify(r));

export { };
