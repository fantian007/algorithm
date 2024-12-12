/**
 * 注意：该题假设一定可以跳到末尾
 * @see https://programmercarl.com/0045.%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8FII.html#%E6%80%9D%E8%B7%AF
 */
function jump(nums: number[]): number {
  const len = nums.length;

  // 长度为1，开始时已经站在了起始点，不需要跳
  if (len === 1) {
    return 0;
  }

  // 当前跳跃位置往后面能覆盖的范围（索引）
  let curCover = 0;
  // 当前位置能覆盖的范围内，从某一点继续跳跃所能覆盖的最大范围
  let nextCover = 0;
  // 跳跃的步数
  let steps = 0;

  /**
   * 思路：
   * 1. 从当前覆盖范围内，选某一点继续跳跃（该点未知，所以需要遍历，取最大的覆盖范围）
   * 2. 当尝试到范围的尾部节点，我们已经确定了下次跳跃从当前范围内哪一点起跳，该点不一定是范围的结束点
   * 3. 但是，无论从覆盖范围的哪一点起跳，总要跳一步才行，所以将 steps++ 放到覆盖范围遍历结束时也可以
   */
  for (let i = 0; i < len; i++) {
    // 重点，取最远的覆盖范围
    nextCover = Math.max(nextCover, i + nums[i]);

    // 当到达最远的覆盖范围位置，继续下一步
    if (i === curCover) {
      steps++;

      // 更新下一次要到达的最远覆盖范围
      curCover = nextCover;

      if (nextCover >= len - 1) break;
    }
  }

  return steps;
}

const r = jump([2, 3, 1, 1, 4]);
// const r = jump([3, 2, 1, 0, 4]);
// const r = jump([2, 0]);
// const r = jump([2, 0, 0]);
console.log(r);

export {};
