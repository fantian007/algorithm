function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const m: Record<number, number[]> = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    m[n] ??= [];
    m[n].push(i);
  }

  const vs = Object.values(m);

  for (const t of vs) {
    if (t.length >= 2 && Math.abs(t.at(-1) - t.at(0)) <= k) {
      return true;
    }
  }

  return false;
};

// const r = containsNearbyDuplicate([1,2,3,1], 3); // true
// const r = containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2); // false
const r = containsNearbyDuplicate([1, 0, 1, 1], 1); // true
console.log(r);

export { }
