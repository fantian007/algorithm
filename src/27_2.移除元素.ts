/**
 * 双指针
 */
function removeElement(nums: number[], val: number): number {
  let p1 = 0;
  let p2 = 0;

  for (; p2 < nums.length; p2++) {
    if (nums[p2] === val) {
      continue;
    }

    nums[p1] = nums[p2];
    p1++;
  }

  return p1;
};

const r = removeElement([3, 2, 2, 3], 3);
console.log(r);

export { };

