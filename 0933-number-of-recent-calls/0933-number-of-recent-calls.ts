class RecentCounter {
    stack = []
    
    constructor() {
        this.stack = [];
    }

    ping(t: number): number {
        this.stack.push(t)

        while(this.stack[0] < t- 3000) {
            this.stack.shift()
        }

        return this.stack.length
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */