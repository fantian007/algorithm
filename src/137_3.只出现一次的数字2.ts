// https://leetcode.cn/problems/single-number-ii/solutions/8944/single-number-ii-mo-ni-san-jin-zhi-fa-by-jin407891/?envType=study-plan-v2&envId=top-interview-150

function singleNumber(nums: number[]): number {
  const arr = new Array<number>(32).fill(0);

  for (let n of nums) {
    for(let j = 0; j < 32; j++) {
      arr[j] += n & 1;
      n >>>= 1;
    };
  };

  // 方法一
  // for(let i = 0; i < 32; i++) {
  //   arr[i] %= 3;
  // };
  
  // return parseInt(arr.reverse().join(''), 2) >> 0; // 有符号右移


  // 方法二
  let r = 0;
  for(let i = 0; i < 32; i++) {
    r <<= 1;
    // 将 arr 对应位置对3取余结果放到 r 上
    r |= arr[31 - i] % 3;
  };

  // 直接返回 r
  return r;
};

const r = singleNumber([2, 2, 3, 2, 6, 6, 6]);
// 010
// 010
// 010
// 011
// ---
// 041
console.log(r);

export { }
