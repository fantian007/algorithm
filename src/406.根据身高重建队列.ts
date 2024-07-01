// 遇到两个维度权衡的时候，一定要先确定一个维度，再确定另一个维度。
// 如果两个维度一起考虑一定会顾此失彼。
function reconstructQueue(people: number[][]): number[][] {
  const queue: number[][] = [];

  // 按身高降序排序，身高相同的按第二元素升序排序
  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });

  // 第二元素可以作为下标了，按下标插入 queue
  for(let i = 0; i < people.length; i++) {
    queue.splice(people[i][1], 0, people[i]);
  };

  return queue;
}

const r = reconstructQueue([
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 0],
  [6, 1],
  [5, 2],
]);
// [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
console.log(r);

export {};
