function removeElement(nums: number[], val: number): number {
  const len = nums.length;
  let slow = 0;
  let fast = 0;

  while (fast <= len - 1) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];

      slow++;
    }

    fast++;
  }

  return slow;
};

const arr = [3, 2, 2, 3];
const r = removeElement(arr, 3);
console.log(r); // 2

export { }
