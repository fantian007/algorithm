/**
 * 滑动窗口
 * 思路：维护一个宽度为 k 的窗口，移动，看窗口内是否有重复元素，即可
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  // [p1, p2) 开区间
  let p1 = 0, p2 = 0;
  const m = new Map();

  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];

    if (m.has(v)) {
      return true;
    }

    m.set(v, 1);

    p2++;

    // p2 是开区间，举例：[0,1,2)，那么实际窗口是 [0,1]，宽度是2，那么需要：2-0-1 = 2
    if (p2 - p1 - 1 >= k) {
      p1++;
      m.delete(m.keys().next().value);
    }
  }

  return false;
};

// const r = containsNearbyDuplicate([1,2,3,1], 3); // true
// const r = containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2); // false
// const r = containsNearbyDuplicate([1, 0, 1, 1], 1); // true
const r = containsNearbyDuplicate([1, 2, 3, 1, 1, 2, 3], 0); // false
console.log(r);

export { }
