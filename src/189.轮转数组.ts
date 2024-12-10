/**
 * 移动后的位置： (k + i) % len;
 */
function rotate(nums: number[], k: number): void {
  // 当前位置的索引
  let o = nums[0];
  // 当前位置的值
  let j = 0;

  // 记录哪些索引被替换过
  const s = new Set<number>();

  // 有未替换的，继续循环
  while (s.size < nums.length) {
    // 被替换位置索引
    j = (k + j) % nums.length;

    // 如果当前位置已经被替换过，那么计算新位置
    while (s.has(j)) {
      // 注意：0-2-4-6-0，会死循环，所以 +1
      j++;
      // 记录当前位置的值
      o = nums[j];
      // 计算新的被替换位置
      j = (k + j) % nums.length;
    }

    // 当值位置的值
    const n = nums[j];
    // 上一个位置的值替换当前位置
    nums[j] = o;
    // 当前位置值作为下一个被替换位置的值
    o = n;

    // 记录替换的索引
    s.add(j);
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
