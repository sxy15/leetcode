// function isSubsequence(s: string, t: string): boolean {
//   let i = 0
//   let j = 0
//   let slen = s.length
//   let tlen = t.length
  
//   while(i < slen && j < tlen) {
//       let cur = s[i]
//       let flag = false
//       for(j; j < tlen; j++) {
//           if(t[j] === cur) {
//               i++
//               flag = true
//               break
//           }

//       }
//       if(!flag) {
//           return false
//       }
//   }

//   return true
// };

function isSubsequence(s: string, t: string): boolean {
  let i = 0
  let j = 0
  let slen = s.length
  let tlen = t.length
  
  while(i < slen && j < tlen) {
      if(s[i] === t[j]) {
        i++
        j++
      } else {
        j++
      }
  }

  return i === slen
};