function canCompleteCircuit(gas: number[], cost: number[]): number {
    const totalGas = getTotal(gas)
    const totalCost = getTotal(cost)
    const n = gas.length

    if(totalGas < totalCost) {
        return -1
    }

   let start = 0;          // 候选起点
    let current_tank = 0;   // 当前油箱油量

    for(let i = 0; i < n;i++) {
        const surplus = gas[i] - cost[i];
        current_tank += surplus;

        if(current_tank < 0) {
            start = i + 1;
            current_tank = 0
        }
    }

    return start

};

function getTotal (arr) {
    return arr.reduce((pre, cur) => {
        return pre + cur
    }, 0)
}