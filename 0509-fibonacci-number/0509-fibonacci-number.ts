// function fib(n: number): number {
//     if(n === 0) {
//         return 0
//     }
//     if(n === 1) {
//         return 1
//     }

//     return fib(n - 1) + fib(n - 2)
// };

function fib(n: number): number {
    if(n === 0) {
        return 0
    }
    if(n === 1) {
        return 1
    }

    let res = 0
    let a = 0;
    let b = 1;

    for(let i = 2; i <= n; i++) {
        res = a + b
        a = b
        b = res
    }

    return res
};