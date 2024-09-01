/**
 * 单调栈 + 遍历 2 遍（将数组延长一倍）
 */
function nextGreaterElements(nums: number[]): number[] {
  const r = new Array(nums.length).fill(-1);
  const stack = [0];

  const nextArr = nums.concat(nums);

  for (let i = 1; i < nextArr.length; i++) {
    let top = stack[stack.length - 1];

    while (stack.length && nextArr[i] > nextArr[top]) {
      r[top] = nextArr[i];
      stack.pop();
      top = stack[stack.length - 1];
    }

    // 数组延长了，这里要取余
    stack.push(i % nums.length);
  };

  return r;
};

// const r = nextGreaterElements([1, 2, 1]); // [2,-1,2]
// const r = nextGreaterElements([1, 2, 3, 4, 3]); // [2,3,4,-1,4]
const r = nextGreaterElements([5, 4, 3, 2, 1]); // [-1,5,5,5,5]
console.log(r);
export { }
