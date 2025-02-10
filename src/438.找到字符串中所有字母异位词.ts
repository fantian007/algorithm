// 滑动窗口
function findAnagrams(s: string, p: string): number[] {
  const r: number[] = [];

  // p 中各字符的数量
  const needs = {};
  // 窗口中各字符数量（只记录 p 中的字符)
  const win = {};
  // 窗口中达到 needs 中各字符数量的 key 的个数
  let matchKeysLen = 0;
  // 窗口左右指针
  let left = 0;
  let right = 0;

  // 收集 p 中字符数量
  for (const c of p) {
    needs[c] ??= 0;
    needs[c]++;
  }
  // p 中字符的个数
  const keysLen = Object.keys(needs).length;

  while (right < s.length) {
    const rv = s[right];

    right++;

    // win 只记录 需要的字符
    if (needs[rv]) {
      win[rv] ??= 0;
      win[rv]++;

      // 如果某个字符达到了 needs 中相同字符的 个数，使 matchKeysLen 数量 +1
      if (win[rv] === needs[rv]) {
        matchKeysLen++;
      }
    }

    // 如果窗口中各字符的数量都满足了 needs 中要求的数量
    while (matchKeysLen === keysLen) {
      // 由于 win 只记录了需要的字符，截取的字符串中间可能会有其它字符，这种是不符合的，要去掉。通过判断截取字符串的长度来判断此类场景。
      if (right - left === p.length) {
        r.push(left);
      }

      // 先取值再自增
      const lv = s[left];

      left++;

      // 只关注需要的字符
      if (needs[lv]) {
        if (needs[lv] === win[lv]) {
          // 左侧指针右移，窗口字符减少
          win[lv]--;
          // 窗口中关注字符的数量变少，不满足数量，所以 matchKeysLen 要减1
          matchKeysLen--;
        } else {
          win[lv]--;
        }
      }
    }
  }

  return r;
};

// const r = findAnagrams('cbaebabacd', 'abc'); // [0, 6]
const r = findAnagrams('abacbabc', 'abc'); // [1,2,3,5]
console.log(r);

export {}
