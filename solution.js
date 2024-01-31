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
