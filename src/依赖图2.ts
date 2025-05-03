// 每个类 + 加载依赖，要求输出 类加载顺序
// const input = {
//   "pizza": ["dough", "tomato"],
//   "dough": ["flour", "water"],
//   "tomato": [],
//   "water": [],
//   "flour": []
// };

// 用一个数组来存储已加载的类，然后不断判断
const fn = (input: Record<string, string[]>) => {
  const r: string[] = [];
  const unUsed = Object.keys(input);

  while (unUsed.length) {
    const k = unUsed.pop();

    const deps = input[k];

    // 是否所有依赖都加载
    const isAllDepsInclude = r.filter(f => deps.includes(f)).length === deps.length;

    if (isAllDepsInclude) {
      // 自身也可以被加载
      r.push(k);
    } else {
      // 重新放入未使用队列中，取出下一个判断，循环
      unUsed.unshift(k);
    }
  }

  return r;
}

const input = {
  "pizza": ["dough", "tomato"],
  "dough": ["flour", "water"],
  "tomato": [],
  "water": [],
  "flour": []
};

const result = fn(input);
console.log(result);

export { }
