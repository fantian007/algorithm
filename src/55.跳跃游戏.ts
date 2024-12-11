/**
 * @see https://programmercarl.com/0055.%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8F.html#%E6%80%9D%E8%B7%AF
 */
function canJump(nums: number[]): boolean {
  const len = nums.length;

  if (len === 1) {
    return true;
  }

  let cover = 0;

  // <= cover，只在 cover 范围内移动，超出 cover 说明接不上了
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, i + nums[i]);

    if (cover >= len - 1) return true;
  }

  return false;
}

// const r = canJump([2, 3, 1, 1, 4]);
// const r = canJump([3, 2, 1, 0, 4]);
// const r = canJump([2, 0]);
const r = canJump([2, 0, 0]);
console.log(r);

export { };
