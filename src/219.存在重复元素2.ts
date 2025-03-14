/**
 * 滑动窗口
 * 思路：维护一个宽度为 k 的窗口，移动，看窗口内是否有重复元素，即可
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const set = new Set();

  // for (let v of nums) {
  for(let i = 0; i < nums.length; i++) {
    const v = nums[i];
  
    // 有重复元素
    if (set.has(v)) {
      return true;
    }

    set.add(v);

    if (set.size > k) {
      // 移除窗口内第一个元素
      set.delete(nums[i - k]);
      // set.delete(set.values().next().value);
    }
  }

  return false;
};

// const r = containsNearbyDuplicate([1,2,3,1], 3); // true
const r = containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2); // false
// const r = containsNearbyDuplicate([1, 0, 1, 1], 1); // true
console.log(r);

export { }
