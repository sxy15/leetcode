/* 链表类 */
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = val || 0
        this.next = next || null
    }
}

/* 初始化链表 1->3->2->5->4*/ // 初始化各个节点
const n0 = new ListNode(1);
const n1 = new ListNode(3);
const n2 = new ListNode(2);
const n3 = new ListNode(5);
const n4 = new ListNode(4); // 构建引用指向
n0.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;

// console.log(n0, n1, n2, n3, n4)

// 插入链表
function insert(v: ListNode, n: ListNode) {
    const nx = v.next
    n.next = nx
    v.next = n
}

const n5 = new ListNode(6)
insert(n3, n5)

/* 1->3->2->5->6->4*/
// console.log(n0, n1, n2, n3, n5, n4)

// 删除n 之后的首个节点
function remove(n: ListNode) {
    if (!n.next) {
        return
    }
    const nn = n.next
    n.next = nn.next
}

remove(n5)
/* 1->3->2->5->6*/
console.log(n0, n1, n2, n3, n5)


/* 访问链表中索引为 index 的节点 */
function access(head: ListNode | null, index: number): ListNode | null {
    for (let i = 0; i < index; i++) {
        if (!head) {
            return null;
        }
        head = head.next;
    }
    return head;
}

/* 在链表中查找值为 target 的首个节点 */
function find(head: ListNode | null, target: number): number {
    let index = 0;
    while (head !== null) {
        if (head.val === target) {
            return index;
        }
        head = head.next;
        index += 1;
    }
    return -1;
}