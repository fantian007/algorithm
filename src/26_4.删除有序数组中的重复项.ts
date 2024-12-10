function removeDuplicates(nums: number[]): number {
  const map = {};

  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    if (map[nums[fast]] !== 1) {
      map[nums[fast]] = 1;
      nums[slow] = nums[fast];
      slow++;
    } else {
      fast++;
    }
  }

  return slow;
};
