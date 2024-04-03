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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let n1 = headA
    let n2 = headB

    while(n1) {
        n1['visited'] = true
        n1 = n1.next
    }

    while(n2) {
        if(n2['visited']) {
            return n2
        }
        n2 = n2.next
    }

    return null
};