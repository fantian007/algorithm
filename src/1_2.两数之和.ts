var twoSum = function (nums, target) {
  const mArr = nums.map((v, i) => ({ i, v }))

  const sfArr = mArr.sort((a, b) => a.v - b.v)

  let stop = false

  while (!stop) {
    const max = sfArr.pop()

    if (!max) { stop = false; break };

    for (let i = 0; i < sfArr.length; i++) {
      const ret = max.v + sfArr[i].v

      if (ret < target) {
        continue
      }
      else if (ret > target) {
        break
      }
      else {
        stop = true
        return [sfArr[i].i, max.i]
      }
    }
  }
};

const r = twoSum([2, 7, 11, 15], 9);
console.log(r);

export { }
