function wiggleMaxLength(nums: number[]): number {
  // 结果
  let r = 1; // nums[0] 算一个数，所以是 1

  // 乘子，在 1, -1 之间来回切换
  let sign = [1, -1];
  // 乘子数组的下标
  let j;

  // 遍历数组的下标
  let i = 1; // nums[0] 已经算在内，这里从 1 开始遍历
  while (i < nums.length) {
    // 当前值和前值的差值
    const diff = nums[i] - nums[i - 1];

    // 差值是正数，那么乘子下标用 0，负数用 1，这样 diff * sign[下标] 永远是正数
    if (j === undefined) {
      if (diff > 0) j = 0;
      else if (diff < 0) j = 1;
    }

    // diff 在 正负之间切换
    // sign[j] 也在正负之间切换
    // 上面2个值是同步切换正负的，乘值永远是正数
    // r++ 累加切换的次数即可
    if (diff * sign[j] > 0) {
      j = Math.abs(j - 1);
      r++;
    }

    i++;
  }

  return r;
}

// const r = wiggleMaxLength([1, 7, 4, 9, 2, 5]);
// const r = wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]);
// const r = wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const r = wiggleMaxLength([3, 3, 3, 2, 5]);
console.log(r);

export {};
