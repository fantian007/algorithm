// 快慢指针
function removeDuplicates(nums: number[]): number {
  const map = {};

  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    if (!map[nums[fast]] || map[nums[fast]] < 2) {
      map[nums[fast]] = (map[nums[fast]] || 0) + 1;

      nums[slow] = nums[fast];
      slow++;
    }

    fast++;
  }

  return slow;
};

const r = removeDuplicates([1, 1, 1, 2, 2, 3]);
console.log(r);

export { }
