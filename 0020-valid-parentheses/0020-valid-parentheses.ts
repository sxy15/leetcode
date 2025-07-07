// function isValid(s: string): boolean {


//   const _stack = []

//     for(let i = 0; i < s.length; i++) {
//         const item = s[i]

//         if(item === '(' || item === '[' || item === '{') {
//             _stack.push(item)
//         } else {
//             const top = _stack.pop()

//             if(item === ')' && top !== '(' ||
//             item === ']' && top !== '[' ||
//             item === '}' && top !== '{' 
//             ) {
//                 return false
//             }
//         }
//     }

//   return _stack.length === 0
// };

function isValid(s: string): boolean {
    const _stack = []

    for(let i = 0; i < s.length; i++) {
        const item = s[i]
        if(item === '{' || item === '[' || item === '(') {
            _stack.push(item)
        } else {
            const top = _stack.pop()

            if(item === ')' && top !== '(' ||
                item === ']' && top !== '[' ||
                item === '}' && top !== '{' 
                ) {
                    return false
                }
        }
    }

    return _stack.length === 0
}