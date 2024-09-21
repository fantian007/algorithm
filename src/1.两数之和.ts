function twoSum(nums: number[], target: number): number[] {
  // key：元素值，value: 下标
  // 边遍历边判断，不要一下子将 nums 遍历完存放到 map，对于 [3,3] 这样的数组，没法存
  const map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    // 差值
    const d = target - nums[i];

    // 注意：下标有 0，不能直接 if(map[d]) {}
    // 如果差值存在，返回下标
    if (map[d] !== undefined) {
      return [map[d], i];
    } else {
      map[nums[i]] = i;
    }
  };

  return [];
};

const r = twoSum([2, 7, 11, 15], 9);
console.log(r);

export { }
