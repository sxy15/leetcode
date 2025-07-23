function reverse(x: number): number {
    const INT_MAX = 2147483647;  // 2^31 - 1
    const INT_MIN = -2147483648; // -2^31
    
    let rev = 0;
    while (x !== 0) {
        // 获取最后一位数字（处理负数）
        const digit = x % 10;
        x = Math.trunc(x / 10);
        
        // 溢出判断（提前终止）
        if (rev > INT_MAX / 10 || 
            (rev === INT_MAX / 10 && digit > 7)) return 0;
        if (rev < INT_MIN / 10 || 
            (rev === INT_MIN / 10 && digit < -8)) return 0;
        
        rev = rev * 10 + digit;
    }
    return rev;
};