/**
 * 没有要求原地算法，那么直接截取 + 拼接
 */
function rotate(nums: number[], k: number): void {
  k = k % nums.length;

  const a = nums.splice(-k);
  nums.unshift(...a);
};

// const arr = [1, 2, 3, 4, 5, 6, 7];
// rotate(arr, 3); // [5,6,7,1,2,3,4]
// const arr = [-1, -100, 3, 99];
// rotate(arr, 2); // [3,99,-1,-100]
// const arr = [1, 2, 3, 4, 5, 6];
// rotate(arr, 2); // [5,6,1,2,3,4]
const arr = [1, 2];
rotate(arr, 3); // [2,1]
console.log(arr);

export { };
