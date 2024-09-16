/**
 * 双指针
 */
function removeDuplicates(nums: number[]): number {
  const map = {};

  let p1 = 0;
  let p2 = 0;

  for (; p2 < nums.length; p2++) {
    const cnt = map[nums[p2]];

    if (!cnt || cnt < 2) {
      nums[p1] = nums[p2];
      p1++;
      map[nums[p2]] = (map[nums[p2]] || 0) + 1;
    } else {
      continue;
    }
  };

  return p1;
};

const r = removeDuplicates([1, 1, 1, 2, 2, 3]);
console.log(r);

export { }
