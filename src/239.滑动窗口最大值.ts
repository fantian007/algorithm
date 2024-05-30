function maxSlidingWindow(nums: number[], k: number): number[] {
  const len = nums.length;
  // 结果数组
  const r = [];
  // 存储下标(比存值方便，值可能有相同的，下标不会)
  let stack = [0];

  let i = 0;
  let j = 1;

  // 只移动 j, 形成窗口
  while (j < i + k) {
    // 栈中下标对应的元素，如果小于添加进来的元素，将这些元素下标删除，保持值单调递增
    // 其实是为了保证最大值在队头的位置，栈中其它元素的顺序不 care
    while (nums[stack[0]] < nums[j]) {
      stack.shift();
    }
    stack.unshift(j);

    j++;
  }

  // j 超了一位，回退一下
  j--;
  // 这时队头最大，存入结果数组
  r.push(nums[stack[stack.length - 1]]);

  // 移动窗口
  while (j < len - 1) {
    // 移动
    i++;
    j++;

    // 和上面作用一样
    while (nums[stack[0]] < nums[j]) {
      stack.shift();
    }
    stack.unshift(j);

    // 如果移除的元素 === 队头，删除队头
    // 这里体现出了存储下标的好处（存值有很多边界case）
    if (nums[i - 1] === nums[stack[stack.length - 1]]) {
      stack.pop();
    }

    // 队头最大，存入结果数组
    r.push(nums[stack[stack.length - 1]]);
  }

  return r;
}

const ret = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
// const ret = maxSlidingWindow([1, -1], 1);
// const ret = maxSlidingWindow([9, 11], 2);
// const ret = maxSlidingWindow([5, 3, 4], 1);
// const ret = maxSlidingWindow([7, 2, 4], 2);
// const ret = maxSlidingWindow([-7, -8, 7, 5, 7, 1, 6, 0], 4);
// const ret = maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5);
console.log(ret);
