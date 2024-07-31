function wordBreak(s: string, wordDict: string[]): boolean {
  // dp[j]: 长度为 j 的字符串，如果可以拆分为 字典中的几个单词组合，那么 dp[j] = true, 否则为 false
  const dp: boolean[] = new Array(s.length + 1).fill(false);

  dp[0] = true;

  // 假设 0-j 截取的子串可以由 字典单词组合，那么 j-i 截取的子串 如果也在字典里，那么 0-i 组成的字符串就可以由字典单词组合（j < i)
  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      // j-i 子串
      const str = s.slice(j, i);

      if (wordDict.includes(str) && dp[j] === true) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}

// const r = wordBreak("leetcode", ["leet", "code"]);
// const r = wordBreak("applepenapple", ["apple", "pen"]);
const r = wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);

console.log(r);

export {};
