/**
 * 双指针
 */
function removeDuplicates(nums: number[]): number {
  const map = {};

  let p1 = 0;
  let p2 = 0;

  for(;p2 < nums.length; p2++) {
    const isExist = map[nums[p2]];

    if (!isExist) {
      nums[p1] = nums[p2];
      map[nums[p2]] = 1;
      p1++;
    } else {
      continue;
    }
  };

  return p1;
};

const r = removeDuplicates([1, 1, 2, 2, 3]); // 3
console.log(r);

export { }

