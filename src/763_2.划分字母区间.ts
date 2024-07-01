/**
 * 简化版
 */
function partitionLabels(s: string): number[] {
  const map = {};

  for(let i = 0; i < s.length; i++) {
    map[s[i]] = i;
  };

  const r = [];
  let left = 0;
  let right = 0;

  for(let i = 0; i < s.length; i++) {
    right = Math.max(map[s[i]], right);

    if (i === right) {
      r.push(i - left + 1);
      left = i + 1;
    }
  };

  return r;
}

const r = partitionLabels("ababcbacadefegdehijhklij"); // [9,7,8]
// const r = partitionLabels("eccbbbbdec"); // [10]
// const r = partitionLabels("caedbdedda"); // [1,9]
console.log(r);

export {};
