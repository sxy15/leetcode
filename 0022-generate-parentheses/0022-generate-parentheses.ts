// function generateParenthesis(n: number): string[] {
//   if(n === 0) {
//       return []
//   }

//   let result: any[] = []
  
//   backTracking(n, 0, 0, result, '')

//   return result
// };

// function backTracking(n: number, lt: number, rt: number, result: any[], str: string): void{
//   if(lt < rt) {
//       return
//   }

//   if(lt === n && rt === n) {
//       result.push(str)
//       return
//   }

//   if(lt < n) {
//       backTracking(n, lt + 1, rt, result, str + '(')
//   }


//   if(rt < lt) {
//       backTracking(n, lt, rt + 1, result, str + ')')
//   }
// }


function generateParenthesis(n: number): string[] {
  const res = []

  function dfs(l, r, str) {
    if(l === 0 && r === 0) {
        res.push(str)
        return
    }

    if(l > 0) {
        dfs(l - 1, r, str + '(')
    }

    if(l < r) {
        dfs(l, r - 1, str + ')')
    }
  }

  dfs(n, n, '')

  return res
};