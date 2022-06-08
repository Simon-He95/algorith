let str = "[abc[df[gh[mk]]]]"
// {  value: 'abc',  children: { value: 'df', children: { value: 'gh', children: {value: mk, children:{}} } }}

function tokenize(str) {
  let chars = []
  const tokens = []
  const stack = []
  while (str) {
    const char = str[0]
    if (char === '[') {
      if (chars.length) {
        stack.push(chars.join(''))
        chars = []
      }
    } else if (char === ']') {
      if (chars.length) {
        stack.push(chars.join(''))
        chars = []
      }
      const result = {}
      stack.reduce((result, c) => {
        result.value = c
        return result.children = {}
      }, result)
      return result
    } else {
      chars.push(char)
    }
    str = str.slice(1)
  }
  return tokens
}

function tranformStr(str) {
  str = str.slice(1)
  let end = str.indexOf(']')
  const strSplit = str.slice(0, end).split('[')
  const result = {}
  strSplit.reduce((pre, cur) => {
    pre.value = cur
    pre.children = {}
    return pre.children
  }, result)
  return result
}
console.log(tranformStr(str))
