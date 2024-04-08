function countStudents(students: number[], sandwiches: number[]): number {
    while(sandwiches.length && students.includes(sandwiches[0])) {
        if(students[0] === sandwiches[0]) {
            students.shift()
            sandwiches.shift()
        } else {
            let item = students[0]
            students.shift()
            students.push(item)
        }
    }

    return students.length
};