function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) {
    return [];
  }

  const r: string[] = [];
  let start = nums[0];

  const pushToR = (start: number, end: number) => {
    if (start !== end) {
      r.push(`${start}->${end}`);
    } else {
      r.push(end.toString());
    }
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === (nums[i - 1] + 1)) {
      continue;
    } else {
      const end = nums[i - 1];

      pushToR(start, end);

      start = nums[i];
    }
  };

  pushToR(start, nums[nums.length - 1]);

  return r;
};

const r = summaryRanges([0, 1, 2, 4, 5, 7]);
// const r = summaryRanges([0, 2, 3, 4, 6, 8, 9]);
console.log(r);

export { }
