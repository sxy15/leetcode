const pad = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}

function letterCombinations(digits: string): string[] {
    if(digits.length === 0) {
        return []
    }

    let currentResult = []

    while(digits.length) {
        currentResult = createCombinations(currentResult, pad[digits[0]])
        digits = digits.slice(1);
    }

    return currentResult
};

function createCombinations(arr: string[], arr2: string[]): string[] {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push(arr[i] + arr2[j])
        }
    }

    if (arr.length === 0) {
        return arr2.concat()
    }

    if (arr2.length === 0) {
        return arr.concat()
    }
    return result
}