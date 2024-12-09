import { S } from 'ts-toolbelt';

type A = S.Split<'abcdefghijklmnopqrstuvwxyz', ''>;

type ArrayToUnion<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First | ArrayToUnion<Rest>
  : never;

type B = ArrayToUnion<A>;

type C = {
  [k in B]?: C;
} & {
  end?: boolean;
}

class Trie {
  next: C = {};

  constructor() {
    this.next = {};
  }

  insert(word: string): void {
    let map = this.next;

    for (const c of word) {
      if (!map[c]) {
        map[c] = {};
      }

      map = map[c];
    }

    // 末尾节点标记为 true（假设最后一个字符是 e，那么是： { e: { end: true } }），注意不是标记在 e 上，而是标记在下一级
    map.end = true;
  }

  getNext(word: string) {
    let map = this.next;

    for (const c of word) {
      if (!map[c]) {
        return false;
      }

      map = map[c];
    }

    return map;
  }

  search(word: string): boolean {
    const n = this.getNext(word);

    return n && n.end === true;
  }

  startsWith(prefix: string): boolean {
    return this.getNext(prefix) !== false;
  }
}

// const trie = new Trie();
// trie.insert("apple");
// console.log(trie.search("apple")); // 返回 True
// console.log(trie.search("app"));  // 返回 False
// console.log(trie.startsWith("apple")); // 返回 True
// trie.insert("appw");
// console.log(trie.search("appw")); // 返回 True

const trie = new Trie();
console.log(trie.startsWith('a')); // false
