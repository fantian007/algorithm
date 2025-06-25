// 给一个字符串："112358"，前2个数的和 = 后一个数的和
// 例如：1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, ...， 其中和不以 0 开头
// "199100199" 也符合序列
// 求写个 isXuLie 函数，判断给出的字符串，可否组成序列

/**
 * 回溯
 * 思路：重点是长度的遍历
 * 1. 出现 3 个字符串，每个字符串都需要遍历长度，那么使用回溯可以统一处理
 * 2. 3 个字符串既然逻辑相同，可以拆分为子问题，入参直接接受 2 个完整字符串 + 1个需要遍历长度的字符串（实际轮动过程中 3 个字符串都会遍历）
 * 3. 过程中不断剪枝，
 *  1. 2 个字符串的和的长度，最大是最长因子的长度 + 1
 *  2. 和字符串的起始位置，不能溢出整体字符串
 */
export const isXuLie = (str: string) => {
  const n = str.length;
  if (n < 3) return false;

  /**
   * 回溯
   * @param start - 第3个数的起始位置
   * @param str1 - 第1个数
   * @param str2 - 第2个数
   * @returns 
   */
  const backtrack = (start: number, str1: string, str2: string) => {
    // 边界
    if (str1 && str2 && start === n) return true;

    // 和的最大长度：因子的最大长度 + 1
    const maxLen = str1 && str2 ? Math.max(str1.length, str2.length) + 1 : n - start;

    // 长度的遍历
    for (let len = 1; len <= maxLen && start + len <= n; len++) {
      const str3 = str.slice(start, start + len);

      if (str1 && str2) {
        const sum = parseInt(str1) + parseInt(str2);

        if (parseInt(str3) !== sum) {
          continue;
        }
      }

      // 轮动
      if (backtrack(start + len, str2, str3)) return true;
    }

    return false;
  }

  return backtrack(0, '', '');
}

// console.log(isXuLie('112358')); // true
// console.log(isXuLie('199100199')); // true
// console.log(isXuLie('123')); // true (1+2=3)
