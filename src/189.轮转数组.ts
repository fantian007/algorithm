/**
 * 移动后的位置： (k + i) % len - 1;
 */
function rotate(nums: number[], k: number): void {
  // 旧位置值
  let o = nums[0];
  // 要替换的位置
  let j = 0;
  // 替换位置的值
  let n;

  // 记录哪些索引被替换过
  const s = new Set<number>();

  // 有未替换的，继续循环
  while (s.size < nums.length) {
    // 计算出新位置
    j = (k + j) % nums.length;

    // 如果当前位置已经被替换过，那么从下一个位置重新开始计算
    while (s.has(j)) {
      j++;
      // 将当前位置作为旧值
      o = nums[j];
      // 计算下一个新位置
      j = (k + j) % nums.length;
    }

    // 记录替换的索引
    s.add(j);

    // 记录新位置值
    n = nums[j];
    // 将旧位置的值给新位置
    nums[j] = o;
    // 新位置值作为下一次的旧位置的值
    o = n;
  }
};

// const arr = [1, 2, 3, 4, 5, 6, 7];
// rotate(arr, 3); // [5,6,7,1,2,3,4]
// const arr = [-1, -100, 3, 99];
// rotate(arr, 2); // [3,99,-1,-100]
const arr = [1, 2, 3, 4, 5, 6];
rotate(arr, 2); // [5,6,1,2,3,4]
console.log(arr);

export { };
