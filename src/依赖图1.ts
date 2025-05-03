// 每个类 + 加载依赖，要求输出 类加载顺序
// const input = {
//   "pizza": ["dough", "tomato"],
//   "dough": ["flour", "water"],
//   "tomato": [],
//   "water": [],
//   "flour": []
// };

// 拓扑排序（图）
const topoLogicSort = (input: Record<string, string[]>) => {
  // 每个节点的入度（有多少条边指向该节点）
  const inDegree: Record<string, number> = {};
  // 邻接表（当前节点指向哪些节点，被哪些节点依赖）
  const graph: Record<string, string[]> = {};
  // 存储所有节点
  const allNodes = new Set<string>();

  // 构建入度 & 邻接表
  for (const k in input) {
    const deps = input[k];
    inDegree[k] = deps.length;

    allNodes.add(k);

    for (const dep of deps) {
      graph[dep] ??= [];
      graph[dep].push(k);

      allNodes.add(dep);
    }
  }

  // 结果数组
  const queue: string[] = [];

  while (allNodes.size) {
    for (const node of allNodes) {
      // 入度为 0，说明其依赖都加载了
      if (inDegree[node] === 0) {
        // 自身也可以被加载
        queue.push(node);

        // 删除节点
        allNodes.delete(node);

        // 依赖当前节点的节点，其入度 -1
        if (node in graph) {
          for (const next of graph[node]) {
            inDegree[next]--;
          }
        }
      };
    }
  }

  return queue;
}

const input = {
  "pizza": ["dough", "tomato"],
  "dough": ["flour", "water"],
  "tomato": [],
  "water": [],
  "flour": []
};

const result = topoLogicSort(input);
console.log(result);

export { }
