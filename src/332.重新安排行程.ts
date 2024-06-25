function findItinerary(tickets: string[][]): string[] {
  const path: string[] = ["JFK"];

  // 按到达机场名称的字典顺序排序
  tickets = tickets.sort((a, b) => (a[1] < b[1] ? -1 : 1));

  const map: { [index: string]: Map<string, number> } = {};

  // 构建 map: {起飞机场：Map<到达机场，次数>}，注意: 相同的 [起飞机场，到达机场] 数量可能大于 1
  for (const [from, to] of tickets) {
    if (!map[from]) {
      map[from] = new Map();
    }

    map[from].set(to, (map[from].get(to) ?? 0) + 1);
  }

  const backtracking = (path: string[]): boolean => {
    // 路线元素比航班次数多1个，遍历完毕
    if (path.length === tickets.length + 1) {
      // 找到了
      return true;
    }

    // 起飞机场
    const last = path[path.length - 1];
    // 到达机场
    const target = map[last];

    if (target) {
      // 同一个起飞机场 =》多个到达机场
      for (const [to, count] of target.entries()) {
        if (count > 0) {
          path.push(to);
          target.set(to, count - 1);
          // 找到就返回，不继续深度、宽度
          if (backtracking(path)) return true;
          path.pop();
          target.set(to, count);
        }
      }
    }

    return false;
  };

  if (backtracking(path)) return path;
}

// const r = findItinerary([
//   ["MUC", "LHR"],
//   ["JFK", "MUC"],
//   ["SFO", "SJC"],
//   ["LHR", "SFO"],
// ]);

// const r = findItinerary([
//   ["JFK", "SFO"],
//   ["JFK", "ATL"],
//   ["SFO", "ATL"],
//   ["ATL", "JFK"],
//   ["ATL", "SFO"],
// ]);

// const r = findItinerary([
//   ["JFK", "ATL"],
//   ["ATL", "JFK"],
// ]);

// const r = findItinerary([
//   ["JFK", "KUL"],
//   ["JFK", "NRT"],
//   ["NRT", "JFK"],
// ]);

// const r = findItinerary([
//   ["AXA", "EZE"],
//   ["EZE", "AUA"],
//   ["ADL", "JFK"],
//   ["ADL", "TIA"],
//   ["AUA", "AXA"],
//   ["EZE", "TIA"],
//   ["EZE", "TIA"],
//   ["AXA", "EZE"],
//   ["EZE", "ADL"],
//   ["ANU", "EZE"],
//   ["TIA", "EZE"],
//   ["JFK", "ADL"],
//   ["AUA", "JFK"],
//   ["JFK", "EZE"],
//   ["EZE", "ANU"],
//   ["ADL", "AUA"],
//   ["ANU", "AXA"],
//   ["AXA", "ADL"],
//   ["AUA", "JFK"],
//   ["EZE", "ADL"],
//   ["ANU", "TIA"],
//   ["AUA", "JFK"],
//   ["TIA", "JFK"],
//   ["EZE", "AUA"],
//   ["AXA", "EZE"],
//   ["AUA", "ANU"],
//   ["ADL", "AXA"],
//   ["EZE", "ADL"],
//   ["AUA", "ANU"],
//   ["AXA", "EZE"],
//   ["TIA", "AUA"],
//   ["AXA", "EZE"],
//   ["AUA", "SYD"],
//   ["ADL", "JFK"],
//   ["EZE", "AUA"],
//   ["ADL", "ANU"],
//   ["AUA", "TIA"],
//   ["ADL", "EZE"],
//   ["TIA", "JFK"],
//   ["AXA", "ANU"],
//   ["JFK", "AXA"],
//   ["JFK", "ADL"],
//   ["ADL", "EZE"],
//   ["AXA", "TIA"],
//   ["JFK", "AUA"],
//   ["ADL", "EZE"],
//   ["JFK", "ADL"],
//   ["ADL", "AXA"],
//   ["TIA", "AUA"],
//   ["AXA", "JFK"],
//   ["ADL", "AUA"],
//   ["TIA", "JFK"],
//   ["JFK", "ADL"],
//   ["JFK", "ADL"],
//   ["ANU", "AXA"],
//   ["TIA", "AXA"],
//   ["EZE", "JFK"],
//   ["EZE", "AXA"],
//   ["ADL", "TIA"],
//   ["JFK", "AUA"],
//   ["TIA", "EZE"],
//   ["EZE", "ADL"],
//   ["JFK", "ANU"],
//   ["TIA", "AUA"],
//   ["EZE", "ADL"],
//   ["ADL", "JFK"],
//   ["ANU", "AXA"],
//   ["AUA", "AXA"],
//   ["ANU", "EZE"],
//   ["ADL", "AXA"],
//   ["ANU", "AXA"],
//   ["TIA", "ADL"],
//   ["JFK", "ADL"],
//   ["JFK", "TIA"],
//   ["AUA", "ADL"],
//   ["AUA", "TIA"],
//   ["TIA", "JFK"],
//   ["EZE", "JFK"],
//   ["AUA", "ADL"],
//   ["ADL", "AUA"],
//   ["EZE", "ANU"],
//   ["ADL", "ANU"],
//   ["AUA", "AXA"],
//   ["AXA", "TIA"],
//   ["AXA", "TIA"],
//   ["ADL", "AXA"],
//   ["EZE", "AXA"],
//   ["AXA", "JFK"],
//   ["JFK", "AUA"],
//   ["ANU", "ADL"],
//   ["AXA", "TIA"],
//   ["ANU", "AUA"],
//   ["JFK", "EZE"],
//   ["AXA", "ADL"],
//   ["TIA", "EZE"],
//   ["JFK", "AXA"],
//   ["AXA", "ADL"],
//   ["EZE", "AUA"],
//   ["AXA", "ANU"],
//   ["ADL", "EZE"],
//   ["AUA", "EZE"],
// ]);

const r = findItinerary([
  ["EZE", "AXA"],
  ["TIA", "ANU"],
  ["ANU", "JFK"],
  ["JFK", "ANU"],
  ["ANU", "EZE"],
  ["TIA", "ANU"],
  ["AXA", "TIA"],
  ["TIA", "JFK"],
  ["ANU", "TIA"],
  ["JFK", "TIA"],
]);

console.log(r);

export {};
