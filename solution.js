/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

function removeElements(head, val) {
  if (head === null) return head;
  let previous = new ListNode(null, null);
  previous.next = head;
  head = previous;
  let current = head;

  while (current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head.next;
}

const test1 = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      6,
      new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, null))))
    )
  )
);

const test2 = null;

const test3 = new ListNode(
  7,
  new ListNode(7, new ListNode(7, new ListNode(7, null)))
);

console.log(removeElements(test1, 6));
console.log(removeElements(test2, 1));
console.log(removeElements(test3, 7));
