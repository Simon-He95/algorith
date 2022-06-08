// 计算l-r的累加和

function sumLR(arr) {
  const help = []
  const len = arr.length
  for (let i = 0; i < len; i++) {
    help.push((help[help.length - 1] || 0) + arr[i])
  }
  return function (l, r) {
    if (!r) {
      r = l
      l = 0
    }
    if (r >= help.length - 1)
      r = help.length - 1
    if (l <= 0) {
      return help[r]
    }
    return help[r] - help[l]
  }
}
const fn = sumLR([1, 5, 6, 3, -2, 1])
console.log(fn(6))
console.log(fn(2, 6))
