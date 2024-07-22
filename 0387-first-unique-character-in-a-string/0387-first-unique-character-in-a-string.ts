function firstUniqChar(s: string): number {
   let freq = {};
    
    for (let c of s) {
        freq[c] = (freq[c] || 0) + 1;
    }
   
    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]] === 1) {
            return i;
        }
    }
    
    return -1;
};