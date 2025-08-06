const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
}

function romanToInt(s: string): number {
    let i = 0
    let l = s.length
    let result = 0

    while(i < l) {
        let l1 = s[i]
        let l2 = s[i + 1]

        if(l2 && map[`${l1}${l2}`]) {
            result += map[`${l1}${l2}`]
            i += 2;
        } else {
            result += map[l1];
            i ++;
        }
    }

    return result
};