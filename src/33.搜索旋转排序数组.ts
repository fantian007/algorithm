
function search(nums: number[], target: number): number {
  const len = nums.length;
  let i = 1;

  for (; i < len; i++) {
    if (nums[i] < nums[i - 1]) {
      break;
    }
  };

  // if (i === len) {
  //   i = 0;
  // }

  const s = nums.splice(0, i);
  nums = nums.concat(s);

  let left = 0, right = len - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      /**
       * [4, 5, 6, 7, 0, 1, 2] 从 0 位置分为 2 段，后半段长度是 d = len - i
       * 重新组合后，变为 [0, 1, 2, 4, 5, 6, 7]，那么 [4-7] 索引增加了 d（前半段长度），[0-2] 索引减少了 i
       */
      const d = len - i;

      // mid 处于后半段 [4-7]，还原索引，需要减去 d
      if (mid >= d) {
        return mid - d;
      }
      // 处于前半段 [0-2]，还原索引，需要增加 i
      else {
        return mid + i;
      }
    }
  }

  return -1;
};

// const r = search([4, 5, 6, 7, 0, 1, 2], 0); // 4
// const r = search([0, 1, 2, 4, 5, 6, 7], 1); // 1
// const r = search([3, 1], 3); // 0
const r = search([3, 5, 1], 3); // 0
console.log(r);

export { }

