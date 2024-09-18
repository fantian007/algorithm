const longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return "";
  }

  // 公共前缀的长度
  let count = 0;
  // 当前比较的索引
  let pinPos = 0;
  // 当前比较的字符
  let pinStr = strs[0][0];
  // 字符串个数
  let len = strs.length

  while (pinStr) {
    pinStr = strs[0][count];

    for (let i = 1; i < len; i++) {
      pinPos = i;

      if (pinStr !== strs[i][count]) {
        pinStr = undefined;
        break;
      }
    }

    count++;
  }

  // count 进行下一轮比较前，先加了1，所以最后要减 1
  count = count - 1;

  return strs[0].slice(0, count);
};

const r = longestCommonPrefix(["flower", "flow", "flight"]);
// const r = longestCommonPrefix([""]);
// const r = longestCommonPrefix(["", '']);
// const r = longestCommonPrefix(['a']);
// const r = longestCommonPrefix(["flower", "flower", "flower", "flower"]);
console.log(r);

export { };

