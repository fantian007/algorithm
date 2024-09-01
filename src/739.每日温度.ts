/**
 * 定义一个栈，栈里存放元素下标。再定义一个 r 数组，数组元素是该下标的下一个更高气温的下标
 * 顺序遍历数组，和栈中末尾元素比较，当大于末尾元素（下一个更高气温），更新末尾元素的 r 数组值，然后将末尾元素弹出栈。遍历元素使用 while 继续和栈内的新末尾元素比较。
 * 当遍历元素小于栈内末尾元素，将遍历元素入栈，继续 for 循环取下一个数开始新一轮比较
 * 遍历结束，栈内可能剩余几个元素，但是这些元素右侧没有比他们更大的元素，所以 r 数组中值对应0，初始化的时候已经是 0 了，不需要做处理
 */
function dailyTemperatures(temperatures: number[]): number[] {
  if (temperatures.length <= 1) {
    return [0];
  }

  const r = new Array(temperatures.length).fill(0);
  const stack = [0];

  for (let i = 1; i < temperatures.length; i++) {
    let top = stack[stack.length - 1];

    while (stack.length && temperatures[i] > temperatures[top]) {
      r[top] = i - top; // 题目要求几天后，所以算一下差值
      stack.pop();
      top = stack[stack.length - 1];
    }

    stack.push(i);
  };

  return r;
};

const r = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
console.log(r);

export {

}
