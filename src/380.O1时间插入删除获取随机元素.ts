// 哈希表 + 数组删除交换
// 哈希表随机访问无法做到 O(1)，数组可以
// 删除数组中间元素时，后面的元素会发生移动，这个移动量可能非常大。但是如果删除元素和数组末尾元素交换，再删除数组末尾元素，那么就是 O(1) 时间复杂度
class RandomizedSet {
  // 记录 值:在数组中的下标
  map = {};
  // 记录 值
  arr = [];

  constructor() {

  }

  has(val: number): boolean {
    return val in this.map;
  }

  insert(val: number): boolean {
    if (this.has(val)) {
      return false;
    }

    this.arr.push(val);
    this.map[val] = this.arr.length - 1;
    return true;
  }

  remove(val: number): boolean {
    if (!this.has(val)) {
      return false;
    }

    const i = this.map[val];
    const last = this.arr.length - 1;
    const lastV = this.arr[last];

    [this.arr[i], this.arr[last]] = [this.arr[last], this.arr[i]];
    this.map[lastV] = i;

    this.arr.pop();
    Reflect.deleteProperty(this.map, val);

    return true;
  }

  // 要求每个元素有相同的概率被返回，Math.random 在 [0,1) 概率是均匀分布的。注意：random 的范围是 [0, 1)
  getRandom(): number {
    const i = Math.floor(Math.random() * this.arr.length);

    return this.arr[i];
  }
}

const o = new RandomizedSet();
console.log(o.insert(1)); // true
console.log(o.insert(10)); // true
console.log(o.insert(20)); // true
console.log(o.insert(30)); // true
console.log(o.getRandom()); // x
console.log(o.getRandom()); // x
console.log(o.getRandom()); // x
console.log(o.getRandom()); // x
console.log(o.getRandom()); // x
console.log(o.getRandom()); // x

export { }
