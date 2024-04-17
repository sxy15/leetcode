function canConstruct(ransomNote: string, magazine: string): boolean {
    let m = magazine
    for(let i = 0; i < ransomNote.length; i++) {
        let letter = ransomNote[i]
        let idx = m.indexOf(letter)
        if(idx !== -1) {
            m = m.slice(0, idx) + m.slice(idx + 1)
        } else {
            return false
        }
    }

    return true
    
};