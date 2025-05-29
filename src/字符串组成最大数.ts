const largestNumber = (arr: string[]): string => {
  if (arr.every(num => num === '0')) return '0';

  return arr
    .sort((a, b) => (b + a).localeCompare(a + b))
    .join('');
};

console.log(largestNumber(['50', '2', '5', '9']));

export { }
