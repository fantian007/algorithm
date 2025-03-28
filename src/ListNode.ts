export class ListNode {
  constructor(public val = 0, public next: ListNode | null = null, public random: ListNode | null = null) {
  }
}


export const createLinkList = (nums: number[]) => {
  const traverse = (i: number) => {
    if (i >= nums.length) {
      return null;
    }

    const node = new ListNode(nums[i]);

    node.next = traverse(i + 1);

    return node;
  }

  return traverse(0);
}
