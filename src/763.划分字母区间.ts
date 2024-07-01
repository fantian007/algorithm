/**
 * 类似【435.无重叠区间】
 * 思路：将各个字符出现的【首次，末次】组成一个区间，有很多区间，求不重叠区间的边界点
 */
function partitionLabels(s: string): number[] {
  const map = {};

  // 统计各个字符的出现下标
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = [];
    }
    map[s[i]].push(i);
  }

  // 取第一个下标，最后一个下标 组件区间
  for (const char in map) {
    if (Object.prototype.hasOwnProperty.call(map, char)) {
      const arr = map[char];

      map[char] = [arr[0], arr[arr.length - 1]];
    }
  }

  const arrs = Object.values(map);
  // 按首次出现顺序排序
  arrs.sort((a, b) => a[0] - b[0]);

  // 分界点
  const r = [];
  // 当前区间的右边界
  let right = arrs[0][1];

  // 收集不重叠区间边界点
  for (let i = 0; i < arrs.length; i++) {
    if (arrs[i][0] > right) {
      r.push(arrs[i][0]);
    }
    right = Math.max(right, arrs[i][1]);
  }

  // 没有边界点，不能分割
  if (r.length === 0) {
    return [s.length];
  }
  // 有分界点，计算长度
  else {
    const w = [r[0]];
    for (let i = 1; i < r.length; i++) {
      w.push(r[i] - r[i - 1]);
    }

    w.push(s.length - r[r.length - 1]);

    return w;
  }
}

// const r = partitionLabels("ababcbacadefegdehijhklij"); // [9,7,8]
// const r = partitionLabels("eccbbbbdec"); // [10]
const r = partitionLabels("caedbdedda"); // [1,9]
console.log(r);

export {};
