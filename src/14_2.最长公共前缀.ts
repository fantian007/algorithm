const longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return "";
  }

  // 单词个数
  let len = strs.length;

  // 下次比较的索引 
  let index = 0;
  // 索引对应的字符
  let char = strs[0][0];

  while (char) {
    char = strs[0][index];

    for (let i = 1; i < len; i++) {

      if (char !== strs[i][index]) {
        char = undefined;
        break;
      }
    }

    index++;
  }

  // count 进行下一轮比较前，先加了1，所以最后要减 1
  index--;

  return strs[0].slice(0, index);
};

const r = longestCommonPrefix(["flower", "flow", "flight"]);
// const r = longestCommonPrefix([""]);
// const r = longestCommonPrefix(["", '']);
// const r = longestCommonPrefix(['a']);
// const r = longestCommonPrefix(["flower", "flower", "flower", "flower"]);
console.log(r);

export { };

