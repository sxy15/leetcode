function titleToNumber(columnTitle: string): number {
    let num: number = 0
    
    for(let i = 0; i < columnTitle.length; i++) {
        num += (columnTitle.charCodeAt(i) - 64) * (26 ** (columnTitle.length - i - 1))
    }

    return num
};