
/**
 * @see https://programmercarl.com/0739.%E6%AF%8F%E6%97%A5%E6%B8%A9%E5%BA%A6.html#%E7%AE%97%E6%B3%95%E5%85%AC%E5%BC%80%E8%AF%BE
 * 单调栈，和每日温度类似，每日温度最终输出一个数组，这里输出 map，记录每个元素对应下一个更大元素的下标
 * 
 * 其实，就是用一个栈来辅助
 * 1. 栈一开始存放数组的第一个元素，然后遍历数组，当遍历的元素大于栈尾元素，说明找到了比栈尾元素大的元素，题目要求找右侧更大的元素，已经找到，
 * 记录下遍历元素的下标，栈内元素就可以丢弃了。注意：栈尾元素丢弃之后，再找下一个栈尾元素，和当前遍历元素比较，重复过程，直至栈尾元素比遍历元素大
 * 2. 最终栈内剩下的都是从大到小的元素，代表这些元素在数组中的右侧没有比他们更大的元素，所以他们对应的初始值都是 -1（按题目要求）
 */
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const r: number[] = [];
  // 记录 nums2 中比当前下标元素更大的下一个数的下标，单调栈
  const stack: number[] = [0];
  // 记录元素值 和 比该元素更大元素的 下标，这样遍历 nums1 时，可以直接用 nums1 的元素值取出来 nums2 中更大元素的下标，然后用 下标去 nums2 中取数
  const map = new Map<number, number>();

  for (let i = 1; i < nums2.length; i++) {
    // 栈内末尾元素
    let top = stack[stack.length - 1];

    // 遍历元素大于末尾元素，map 记录遍历元素的下标和
    while (stack.length && nums2[i] > nums2[top]) {
      // 记录 { 遍历元素：更大元素下标 }
      map.set(nums2[top], i);
      // 出栈，用新的末尾元素去和 nums2[i]比较
      stack.pop();
      // 新的末尾元素下标
      top = stack[stack.length - 1];
    }

    // 栈内没有更小的元素了，遍历元素入栈
    stack.push(i);
  };

  // map 记录完毕，开始遍历 nums1
  for (let j = 0; j < nums1.length; j++) {
    // nums2 中更大元素的下标
    const index = map.get(nums1[j]);

    if (index >= 0) {
      // 从 num2 中找到了，取值
      r.push(nums2[index]);
    } else {
      // 未找到，按题目要求置为 -1
      r.push(-1);
    }
  };

  return r;
};

const r = nextGreaterElement([4, 1, 2], [1, 3, 4, 2]); // [-1,3,-1]
console.log(r);

export { }
