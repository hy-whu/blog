/*
 * [394] 字符串解码
 * 2[a3[bc]] ->abcbcbcabcbcbc
 */

/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
  let stack = [] // 保存需要 repeat 的字符串
  let times = '' // 乘以的倍数

  for (let i = 0, len = s.length; i < len; i++) {
    let item = s[i]

    if (/[0-9]/.test(item)) {
      if (i === 0 || /[0-9]/.test(s[i - 1])) {
        times += item
      } else {
        times = item
      }
    } else if (item === '[') {
      times && stack.push(Number(times))
      times = ''
    } else if (item === ']') {
      var curr = stack.pop()
      var temp = ''
      while (typeof curr !== 'number') {
        temp = curr + temp
        curr = stack.pop()
      }
      temp = temp.repeat(curr)
      stack.push(temp)
    } else {
      stack.push(item)
    }
  }
  return stack.join('')
}
