function topKFrequent(nums: number[], k: number): number[] {
  const map: { [k: number]: number } = {};

  for (const n of nums) {
    if (map[n] === undefined) {
      map[n] = 1;
    } else {
      map[n] += 1;
    }
  }

  const v = Object.entries(map).sort((a, b) => (a[1] - b[1] > 0 ? -1 : 1));
  const t = v.slice(0, k).map((a) => parseInt(a[0]));

  return t;
}

const r = topKFrequent([4, 1, -1, 2, -1, 2, 3], 2);

console.log(r);

export {};
