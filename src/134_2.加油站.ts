/**
 * 图解法
 * @see https://leetcode.cn/problems/gas-station/solutions/2074636/dang-lao-si-ji-xue-hui-liao-tan-xin-suan-8s2g/?envType=study-plan-v2&envId=top-interview-150
 */
function canCompleteCircuit(gas: number[], cost: number[]): number {
  // 到达下一个站点的油箱剩余油量
  let sum = 0;
  // 最小剩余油量
  let minSum = 0;
  // 起始点
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    // 以 i 为起点，到达了 i + 1 的油箱剩余油量
    sum += gas[i] - cost[i];

    // 能走到这里的，都是 < 0 的值
    if (sum < minSum) {
      minSum = sum;
      /**
       * i + 1 位置是图中最低点
       * 
       * 如果 i+1 超出了下标范围，代表最后一个站点回到索引0站点出现了缺油，意思跑了一圈出现了缺油，那么会走 sum < 0 的逻辑，最终返回 -1
       */
      start = i + 1;
    }
  };

  // 跑了一圈（无论是从哪个站点开始跑），最终剩余的油量是负的(总油量小于总消耗)，说明不可能跑完一圈，直接返回 -1
  if (sum < 0) {
    return -1;
  }

  return start;
}

const r = canCompleteCircuit([2,2,0], [2,3,1]); // 3
// const r = canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]); // 3
// const r = canCompleteCircuit([3, 1, 1], [1, 2, 2]); // 0
// const r = canCompleteCircuit([2, 3, 4], [3, 4, 3]);
// const r = canCompleteCircuit([10, 5, 2, 3, 5], [50, 2, 1, 10, 2]);

console.log(r);

export { };
