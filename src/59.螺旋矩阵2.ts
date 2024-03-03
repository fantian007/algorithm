function generateMatrix(n: number): number[][] {
  const r = new Array(n);

  for (let i = 0; i < r.length; i++) {
    r[i] = new Array(n);
    r[i].fill(0);
  }

  let i = 1;
  let x = 0;
  let y = 0;

  r[x][y] = 1;

  while (i <= Math.pow(n, 2)) {
    while (1) {
      r[x][y] = i;

      if (i === Math.pow(n, 2)) {
        return r;
      }

      i++;

      if (r[x]?.[y + 1] === undefined || r[x]?.[y + 1] !== 0) {
        x++;
        break;
      } else {
        y++;
      }
    }

    while (1) {
      r[x][y] = i;

      if (i === Math.pow(n, 2)) {
        return r;
      }

      i++;

      if (r[x + 1]?.[y] === undefined || r[x + 1]?.[y] !== 0) {
        y--;
        break;
      } else {
        x++;
      }
    }

    while (1) {
      r[x][y] = i;

      if (i === Math.pow(n, 2)) {
        return r;
      }

      i++;

      if (r[x]?.[y - 1] === undefined || r[x]?.[y - 1] !== 0) {
        x--;
        break;
      } else {
        y--;
      }
    }

    while (1) {
      r[x][y] = i;

      if (i === Math.pow(n, 2)) {
        return r;
      }

      i++;

      if (r[x - 1]?.[y] === undefined || r[x - 1]?.[y] !== 0) {
        y++;
        break;
      } else {
        x--;
      }
    }
  }

  return r;
}

console.log(generateMatrix(5));
