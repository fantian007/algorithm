// 从大到小排序，好理解一点
function findKthLargest(nums: number[], k: number): number {
  const n = nums.length;

  const quickSelect = (left: number, right: number) => {
    if (left === right) return nums[left];

    // 注意：不能是 pivot = [索引], 然后 nums[i] > nums[pivot]; 主元索引在排序过程会不断变化，值必须要固定
    // 快排主元
    const pivot = nums[Math.floor((left + right) / 2)];
    let i = left - 1;
    let j = right + 1;

    while (true) {
      do i++; while (nums[i] > pivot);
      do j--; while (nums[j] < pivot);

      if (i >= j) break;
      // 交换元素（可能会将主元交换到其它地方）
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    if (j >= k - 1) {
      // 左区间
      return quickSelect(left, j);
    } else {
      // 右区间
      return quickSelect(j + 1, right);
    }
  }

  return quickSelect(0, n - 1);
};

const r = findKthLargest([3, 2, 2, 1, 9, 1, 2, 10, 1, 5, 6, 4], 2); // 9
console.log(r);

export { }
