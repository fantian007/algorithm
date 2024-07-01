/**
 * 注意：该题假设一定可以跳到末尾
 * @see https://programmercarl.com/0045.%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8FII.html#%E6%80%9D%E8%B7%AF
 */
function jump(nums: number[]): number {
  const len = nums.length;

  if (len === 1) {
    return 0;
  }

  let curCover = 0;
  let nextCover = 0;
  let steps = 0;

  // 按到达 nums[nums.length - 2] 算，即 倒数第2位
  for (let i = 0; i < len - 1; i++) {
    // 重点，取最远的覆盖范围
    nextCover = Math.max(i + nums[i], nextCover);

    // 如果正巧到达了 nums[nums.length - 2]，那么 steps 还要 +1， 最后一步一定会到达末尾
    if (i === curCover) {
      steps++;

      // 更新下一次要到达的最远覆盖范围
      curCover = nextCover;
    }
    // 如果没有达到边界点，说明还在 cover 范围内移动，cover 已经覆盖了末尾，不需要 +1，直接返回
  }

  return steps;
}

const r = jump([2, 3, 1, 1, 4]);
// const r = jump([3, 2, 1, 0, 4]);
// const r = jump([2, 0]);
// const r = jump([2, 0, 0]);
console.log(r);

export {};
