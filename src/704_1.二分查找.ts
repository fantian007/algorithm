/**
 * [a,b] 区间，常规写法
 */
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.ceil((left + right) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    }

    if (nums[mid] === target) {
      return mid;
    }
  }

  return -1;
}

/**
 * [a, b) 区间
 */
function search1(nums: number[], target: number): number {
    let left = 0;
    // nums[nums.length-1] 可能等于 target, 右侧开区间不包含 target，所以 right = nums.length - 1
    let right = nums.length;

    // 按区间定义，left 不可能等于 right
    while (left < right) {
      let mid = Math.ceil((left + right) / 2);

      if (nums[mid] > target) {
        // nums[mid - 1] 可能等于 target, right = mid(按开区间定义)
        right = mid;
      }

      if (nums[mid] < target) {
        left = mid + 1;
      }

      if (nums[mid] === target) {
        return mid;
      }
    }

    return -1;
  }

const ia = search1([-1, 0, 3, 5, 9, 12], 12);
console.log(ia);
