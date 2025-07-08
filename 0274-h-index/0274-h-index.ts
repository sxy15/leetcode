function hIndex(citations: number[]): number {
    const s = citations.sort((a, b) => a - b);

    let n = 1
    for(let i = s.length - 1; i >= 0; i--) {
        if(n > s[i]) {
            break;
        }
        n++;
    }

    return n - 1;
};