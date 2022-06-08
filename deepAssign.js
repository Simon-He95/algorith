const _toString = Object.prototype.toString

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]'
}
// 深合并,数组中的数据不参与合并
export function deeoAssign(target, ...sources) {
  if (!isPlainObject(target)) {
    return target
  }

  sources.forEach((source) => {
    if (!isPlainObject(source)) {
      throw new Error(`${source} is not objectType`)
    }
    if (!Object.keys(target).length) {
      Object.assign(target, source)
    } else {
      for (let key in source) {
        if (
          key in target &&
          isPlainObject(target[key]) &&
          isPlainObject(source[key])
        ) {
          objectMix(target[key], source[key])
        } else {
          target[key] = source[key]
        }
      }
    }
  })
  return target
}
