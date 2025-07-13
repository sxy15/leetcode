function simplifyPath(path: string): string {
    let stack = []

    let paths = path.split('/')

    for(let i = 0; i < paths.length; i++) {
        let item = paths[i]

        if(item === '' || item === '.') {
            
        } else if(item === '..') {
            stack.pop()
        } else {
            stack.push(item)
        }
    }

    return `/${stack.join('/')}`
};