function intToRoman(num: number): string {
  let r = '';

  /**
   * if else 穷举所有情况
   * 单独列出 4,9 开头的数字 对应的字符组合
   */
  while (num > 0) {
    if (num >= 1e3) {
      r += 'M';
      num -= 1e3;
    } else if (num >= 900) {
      r += 'CM';
      num -= 900;
    } else if (num >= 500) {
      r += 'D';
      num -= 500;
    } else if (num >= 400) {
      r += 'CD';
      num -= 400;
    } else if (num >= 100) {
      r += 'C';
      num -= 100;
    } else if (num >= 90) {
      r += 'XC';
      num -= 90;
    } else if (num >= 50) {
      r += 'L';
      num -= 50;
    } else if (num >= 40) {
      r += 'XL';
      num -= 40;
    } else if (num >= 10) {
      r += 'X';
      num -= 10;
    } else if (num >= 9) {
      r += 'IX';
      num -= 9;
    } else if (num >= 5) {
      r += 'V';
      num -= 5;
    } else if (num >= 4) {
      r += 'IV';
      num -= 4;
    } else if (num >= 1) {
      r += 'I';
      num -= 1;
    }
  }

  return r;
};

// const r = intToRoman(3749); // MMMDCCXLIX
const r = intToRoman(1000); // M
console.log(r);

export {}
