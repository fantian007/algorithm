/**
 * @see https://programmercarl.com/0134.%E5%8A%A0%E6%B2%B9%E7%AB%99.html#%E6%80%9D%E8%B7%AF
 */
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let sum = 0;
  let curSum = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    curSum += gas[i] - cost[i];
    sum += gas[i] - cost[i];

    // 断油了，将 i + 1 处作为起点重新计算
    if (curSum < 0) {
      start = i + 1;
      curSum = 0;
    }
  }

  if (sum < 0) return -1;

  return start;
}

// const r = canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
// const r = canCompleteCircuit([2, 3, 4], [3, 4, 3]);
const r = canCompleteCircuit([10, 5, 2, 3, 5], [50, 2, 1, 10, 2]);

console.log(r);

export { };
