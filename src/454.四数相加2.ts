function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  const map = new Map();

  for (const i of nums1) {
    for (const j of nums2) {
      const sum = i + j;
      const t = map.get(i + j);

      if (!t) {
        map.set(sum, 1);
      } else {
        map.set(sum, t + 1);
      }
    }
  }

  let total = 0;

  for (const i of nums3) {
    for (const j of nums4) {
      const sum = i + j;

      if (map.has(0 - sum)) {
        total += map.get(sum);
      }
    }
  }

  return total;
}

const r = fourSumCount([-1,-1], [-1,1], [-1,1], [1,-1]);
console.log(r);

export {};
