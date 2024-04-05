function longestCommonPrefix(strs: string[]): string {
    let sort = strs.sort((a, b) => a > b ? -1 : 1)
    // 排序后，前2个字符串 肯定是前缀结构一致的。直接比较 1 和 3 一样的就可以了
    let res = []
    let s1 = sort[0]
    let s3 = sort[sort.length - 1]

    for(let i = 0; i < s3.length; i++) {
        if(s1[i] === s3[i]) {
            res.push(s1[i])
        } else {
            break
        }
    }

    return res.join('')
};