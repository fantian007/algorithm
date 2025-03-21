function simplifyPath(path: string): string {
  const stack = [];

  const paths = path.split('/');

  for (const path of paths) {
    if (path === '..') {
      stack.pop();
    }
    else if (path === '.') {
      continue;
    }
    else if (path === '/') {
      continue;
    }
    else if (path === '') {
      continue;
    }
    else {
      stack.push(path);
    }
  }

  let r = stack.join('/');

  if (!r.startsWith('/')) {
    r = '/' + r;
  }

  return r;
};

const r = simplifyPath("/.../a/../b/c/../d/./"); // "/.../b/d"
console.log(r);

export { }
