/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// 设置2个节点，第一个节点往后移动n位，然后同步往后移动，第一个到尾部的时候，第二个节点就是要找的节点
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let n1 = new ListNode(0, head)
    let n2 = new ListNode(0, head)

    while(n > 0) {
        n1 = n1.next
        n--
    }

    if(n1.next === null) {
        return head.next
    }

    while(n1.next !== null) {
        n1 = n1.next
        n2 = n2.next
    }

    n2.next = n2.next.next

    return head
};