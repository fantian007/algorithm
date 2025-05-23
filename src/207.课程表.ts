function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const inDegree = {};
  const graph: Record<number, number[]> = {};
  const allNodes = new Set<number>();

  for (const [node, dep] of prerequisites) {
    inDegree[node] ??= 0;
    inDegree[node] += 1;

    graph[dep] ??= [];
    graph[dep].push(node);

    allNodes.add(node);
    allNodes.add(dep);
  }

  const queue: number[] = [];

  while (allNodes.size) {
    for (const node of allNodes) {
      if (inDegree[node] === 0) {
        queue.push(node);
        allNodes.delete(node);

        if (node in graph) {
          for (const next of graph[node]) {
            inDegree[next]--;
          }
        }
      }
    }
  }

  return false;
};

const r = canFinish(2, [[1, 0]]);
console.log(r);

export { }
