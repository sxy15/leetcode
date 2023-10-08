class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head = new ListNode(0, null)
    let p = head
    let carry = 0
    while (l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
        carry = Math.floor(sum / 10) //溢出
        p.next = new ListNode(sum % 10, null)
        p = p.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    if (carry) {
        p.next = new ListNode(carry, null)
    }
    return head.next
}