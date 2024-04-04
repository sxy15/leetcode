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
    let sum = 0, i = 0;

    while(i < s.length) {
         let key = s[i] + (s[i+1] || '')
        if(map[key] && i + 1 !== s.length) {
            i ++
            sum += map[key]
        } else {
            sum += map[s[i]]
        }
        
        i++
    }

    return sum
    
};