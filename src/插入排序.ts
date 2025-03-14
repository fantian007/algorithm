/**
 * 
 * @see 动态图片演示 https://mmbiz.qpic.cn/mmbiz_gif/D67peceibeISwc3aGibUlvZ0XqVnbWtBRiaiatKZU4exjwcluduiclJOdZB0oZQicCrpIEaSJJg8iaia58viauSK3nhofqA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1
 * 和打扑克牌时排列的动作相同
 */
const sort = (arr: number[]) => {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let prevIndex = i - 1;
    const current = arr[i];

    // 从小到大排序
    // 从已经排序好的数组里面，从后往前取数，取出来的数 和 未排序的 current 比较
    // 如果发现 取出的数 大于 current，那么大于 current 的部分的数均向后移动一位，将当前位置预留给 current 插入
    while (prevIndex >= 0 && arr[prevIndex] > current) {
      // 向后移动一位, prevIndex 位置预留给 current
      arr[prevIndex + 1] = arr[prevIndex];
      // 递减，继续下一次取数和比较
      prevIndex--;
      // 递减完毕，但是还未移位，所以预留位置是 prevIndex + 1
    }

    // 没有更大的了，将 current 放到对应位置上，完成排序
    arr[prevIndex + 1] = current;
  }

  return arr;
}

const arr = [1, 4, 6, 2];
// const arr = [6, 1, 4, 2, 3, 5];
const r = sort(arr);

console.log(r);

export { }
