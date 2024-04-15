const map = {
    '1': 'I',
    '4': 'IV',
    '5': 'V',
    '9': 'IX',
    '10': 'X',
    '40': 'XL',
    '50': 'L',
    '90': 'XC',
    '100': 'C',
    '400': 'CD',
    '500': 'D',
    '900': 'CM',
    '1000': 'M',
}

const arr = [1, 4, 5, 9]

function intToRoman(num: number): string {
    let str = ''
    while (num) {
        let len = `${num}`.length
        let n = Math.floor(num / (Math.pow(10, len - 1)))
        let _n = n * Math.pow(10, len - 1)

        if (map[_n]) {
            str += map[_n]
        } else {
            let prev = 0
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > n) {
                    prev = arr[i - 1]
                    break
                }
            }

            str += map[prev * Math.pow(10, len - 1)]
            while (n > prev) {
                str += map[Math.pow(10, len - 1)]
                n--
            }
        }

        num = num - _n
    }

    return str
};