/**
 * 
 * @see 动态图片演示 https://mmbiz.qpic.cn/mmbiz_gif/D67peceibeISwc3aGibUlvZ0XqVnbWtBRiaiatKZU4exjwcluduiclJOdZB0oZQicCrpIEaSJJg8iaia58viauSK3nhofqA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1
 * 和打扑克牌时排列的动作相同
 */
const sort = (arr: number[]) => {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let prevIndex = i - 1;
    let curIndex = i;

    const curV = arr[curIndex];

    // [1,4,6,2]，对于 2 排序，先将数组移位成 [1,4,4,6]，即 4,6 均大于2，都向后移动，再将第二个4替换为2
    while (prevIndex >= 0 && arr[prevIndex] > curV) {
      // 移动
      arr[prevIndex + 1] = arr[prevIndex];

      prevIndex--;
    }

    // 替换
    arr[prevIndex + 1] = curV;
  }

  return arr;
}

const arr = [1, 4, 6, 2];
// const arr = [6, 1, 4, 2, 3, 5];
const r = sort(arr);

console.log(r);

export { }
