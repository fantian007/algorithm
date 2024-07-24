// 和分割等和子集一样
// 本题其实就是尽量让石头分成重量相同的两堆，相撞之后剩下的石头最小，这样就化解成01背包问题了。
// 重点：相撞之后可以消失，这样我们可以求解 s = Math.floor(sum/2) 背包容量最大能装多少石头，然后 sum - 2*s 就是剩余的边角料了
function lastStoneWeightII(stones: number[]): number {
  const sum = stones.reduce((a, b) => a + b, 0);

  const bagSize = Math.floor(sum / 2);
  const dp: number[] = new Array(bagSize + 1).fill(0);

  for (let i = 0; i < stones.length; i++) {
    for (let j = bagSize; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }

  return sum - dp[bagSize] - dp[bagSize];
}

// const r = lastStoneWeightII([2, 7, 4, 1, 8, 1]);
const r = lastStoneWeightII([31, 26, 33, 21, 40]);
console.log(r);

export {};
