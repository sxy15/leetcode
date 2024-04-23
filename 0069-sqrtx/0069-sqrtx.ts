// function mySqrt(x: number): number {
//     return Math.floor(Math.pow(x, 0.5))
// };

function mySqrt(x: number): number {
    if(x === 0 || x === 1) return x

    let nearest = 1

    for(let i = 2; i < x; i++) {
        if(i * i === x) {
            return i
        }

        if(i * i > x) {
            break
        }

        nearest = i
    }

    return nearest
}