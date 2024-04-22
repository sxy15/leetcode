function searchMatrix(matrix: number[][], target: number): boolean {
    let _arr = []
    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i]
        if (arr[0] <= target && arr[arr.length - 1] >= target) {
            _arr = arr
            break
        }
    }

    for (let j = 0; j < _arr.length; j++) {
        if (_arr[j] === target) {
            return true
        }
    }

    return false
};