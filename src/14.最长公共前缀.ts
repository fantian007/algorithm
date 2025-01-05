function longestCommonPrefix(strs: string[]): string {
  // 只有一个元素，直接返回该元素
  if (strs.length === 1) {
    return strs[0];
  }

  // 第一个元素是 '', 直接返回 ''
  if (strs[0] === '') {
    return '';
  }

  // 遍历第一个元素
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    // 第一个元素的字符和其他元素的相同位置的元素比较
    for (let j = 1; j < strs.length; j++) {
      // 相同，继续比较
      if (strs[j][i] === char) {
        continue;
      } else {
        // 不同，直接截取到 i，返回
        return strs[0].slice(0, i);
      }
    };

    // 注意：遍历完毕了，如果中途未返回，那么所有元素相同
    // if (i === strs[0].length - 1) {
    //   return strs[0];
    // }
  };

  return strs[0];
};

// const r = longestCommonPrefix(["flower", "flow", "flight"]);
// const r = longestCommonPrefix([""]);
// const r = longestCommonPrefix(["", '']);
// const r = longestCommonPrefix(['a']);
const r = longestCommonPrefix(["flower", "flower", "flower", "flower"]);
console.log(r);

export { };

