function intersection(nums1: number[], nums2: number[]): number[] {
  const r: number[] = [];

  for (const n of nums2) {
    if (nums1.includes(n)) {
      if (!r.includes(n)) {
        r.push(n);
      }
    }
  }

  return r;
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
