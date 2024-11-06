/**
 * 直接递归有超时问题
 * 
 * 可对重叠子问题优化
 */
function rob(nums: number[]): number {
  const len = nums.length;

  // 备忘录
  const memo = new Array(len + 2).fill(undefined)

  const dp = (start: number) => {
    if (start > len - 1) {
      return 0;
    }

    // 检查备忘录
    if (memo[start] !== undefined) {
      return memo[start];
    }

    const res = Math.max(
      // 不抢当前的，抢下一家
      dp(start + 1),
      // 抢当前的，下一家不抢
      nums[start] + dp(start + 2)
    );

    // 记入备忘录
    memo[start] = res;

    return res;
  }

  const ret = dp(0);

  return ret;
};

export {}
