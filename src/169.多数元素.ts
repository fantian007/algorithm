function majorityElement(nums: number[]): number {
  const map = {} as Record<number, number>;

  const a = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;

    if (map[nums[i]] > a) {
      return nums[i];
    }
  };
};

const r = majorityElement([3, 2, 3]);
console.log(r);
export { };

