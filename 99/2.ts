/**
 * 双指针
 * 给你一个字符串 s 和一个字符串数组 dictionary, 找出并返回 dictionary 中最长的字符串, 该字符串可以通过删除 s 中的某些字符得到
 * 如果答案不止一个, 返回长度最长且字典序最小的字符串, 如果答案不存在, 返回空字符串
 */

/**
 * s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
 * 输出: "apple"
 * 
 * s = "abpcplea", dictionary = ["a","b","c"]
 * 输出: "a"
 */

function isSubstr(s: string, t: string): boolean {
  let i = 0, j = 0
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) j++
    i++
  }
  return j === t.length
}

function findLongestWord(s: string, dictionary: string[]): string {
  let res = ''
  for (let i = 0; i < dictionary.length; i++) {
    const item = dictionary[i]
    if (item.length < res.length || (item.length === res.length && item > res)) continue
    if (isSubstr(s, item)) res = item
  }
  return res
}

console.log(findLongestWord('abpcplea', ["ale","apple","monkey","plea"]))
console.log(findLongestWord('abpcplea', ["a","b","c"]))