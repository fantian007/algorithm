// 动规 = 穷举（递归）+ 备忘录（dp table)
function lengthOfLIS(nums) {
  // 备忘录，初始值设为 -1，表示尚未计算过
  const memo = new Array<number>(nums.length).fill(-1);

  // 定义递归函数进行穷举计算
  function dp(index: number) {
    // 返回缓存
    if (memo[index] !== -1) {
      return memo[index];
    }

    // 初始化当前位置的最长递增子序列长度为1
    let maxLen = 1;

    // 从当前位置往后遍历数组，穷举所有可能的子序列
    for (let i = index + 1; i < nums.length; i++) {
      if (nums[i] > nums[index]) {
        // 如果后面的元素大于当前元素，递归计算以该元素为起点的最长递增子序列长度
        // 并更新当前位置的最长递增子序列长度
        maxLen = Math.max(maxLen, 1 + dp(i));
      }
    }

    // 将计算得到的当前子问题结果存入备忘录
    memo[index] = maxLen;

    return maxLen;
  }

  // 遍历数组的每个位置，调用递归函数计算以该位置为起点的最长递增子序列长度
  // 并找到其中的最大值作为整个数组的最长递增子序列长度
  let r = 0;
  for (let i = 0; i < nums.length; i++) {
    r = Math.max(r, dp(i));
  }

  return r;
}

// const r = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]); // 4
// const r = lengthOfLIS([0, 1, 0, 3, 2, 3]); // 4
const r = lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]); // 6
console.log(r);

export { }

