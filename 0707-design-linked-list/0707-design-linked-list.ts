class LinkNode {
    val: number | null;
    next: LinkNode | null;
    prev: LinkNode | null;

    constructor(val: number | null) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MyLinkedList {
    head: LinkNode;
    tail: LinkNode;
    size: number;

    constructor() {
        this.head = new LinkNode(null);
        this.tail = new LinkNode(null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }

    // 获取指定索引的节点（内部方法）
    private getNode(index: number): LinkNode | null {
        // 检查索引有效性
        if (index < 0 || index >= this.size) {
            return null;
        }
        
        // 优化：根据位置选择从头或从尾开始遍历
        if (index < this.size / 2) {
            // 从头开始
            let current: LinkNode = this.head.next!;
            for (let i = 0; i < index; i++) {
                current = current.next!;
            }
            return current;
        } else {
            // 从尾开始
            let current: LinkNode = this.tail.prev!;
            for (let i = this.size - 1; i > index; i--) {
                current = current.prev!;
            }
            return current;
        }
    }

    get(index: number): number {
        const node = this.getNode(index);
        return node ? node.val! : -1;
    }

    addAtHead(val: number): void {
        const node = new LinkNode(val);
        const firstNode = this.head.next!;
        
        // 连接新节点
        node.prev = this.head;
        node.next = firstNode;
        
        // 更新周围节点
        this.head.next = node;
        firstNode.prev = node;
        
        this.size++;
    }

    addAtTail(val: number): void {
        const node = new LinkNode(val);
        const lastNode = this.tail.prev!;
        
        // 连接新节点
        node.prev = lastNode;
        node.next = this.tail;
        
        // 更新周围节点
        lastNode.next = node;
        this.tail.prev = node;
        
        this.size++;
    }

    addAtIndex(index: number, val: number): void {
        // 处理特殊情况
        if (index < 0 || index > this.size) {
            return;
        }
        
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        
        if (index === this.size) {
            this.addAtTail(val);
            return;
        }
        
        // 在中间插入
        const currentNode = this.getNode(index);
        if (!currentNode) return;
        
        const node = new LinkNode(val);
        const prevNode = currentNode.prev!;
        
        // 连接新节点
        node.prev = prevNode;
        node.next = currentNode;
        
        // 更新周围节点
        prevNode.next = node;
        currentNode.prev = node;
        
        this.size++;
    }

    deleteAtIndex(index: number): void {
        // 检查索引有效性
        if (index < 0 || index >= this.size) {
            return;
        }
        
        const nodeToDelete = this.getNode(index);
        if (!nodeToDelete) return;
        
        const prevNode = nodeToDelete.prev!;
        const nextNode = nodeToDelete.next!;
        
        // 跳过要删除的节点
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        
        // 可选：清理引用，帮助垃圾回收
        nodeToDelete.prev = null;
        nodeToDelete.next = null;
        
        this.size--;
    }

    // 辅助方法，用于调试
    printList(): void {
        let current = this.head.next;
        const values: (number | null)[] = [];
        while (current !== this.tail) {
            values.push(current!.val);
            current = current!.next;
        }
        console.log(`Size: ${this.size}, List: [${values.join(' -> ')}]`);
    }
}