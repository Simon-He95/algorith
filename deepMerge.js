const _toString = Object.prototype.toString

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]'
}
// 深合并,数组中的数据不参与合并
export function deepMerge(target, ...sources) {
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
          deepMerge(target[key], source[key])
        } else {
          target[key] = source[key]
        }
      }
    }
  })
  return target
}



let b = {
  people: {
    name: 'xx',
    age: '11',
    fn: {},
    arr: [1, 2, 3],
  },
  name1: {
    name2: '',
  },
}
let c = {
  people: {
    name: 'xx',
    age: '11',
    fn: {
      name: '11',
    },
    arr: [1, 2, 4],
  },
  name1: {
    name2: {},
  },
}

console.log(deepMerge({}, b, c))
