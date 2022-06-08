const _toString = Object.prototype.toString

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]'
}

// 深比较
export function deepCompare(comp1, comp2, name, error = []) {
  if (isPlainObject(comp1) && isPlainObject(comp2)) {
    let much =
      Object.keys(comp1).length > Object.keys(comp2).length ? comp1 : comp2
    for (const key in much) {
      debugger
      const value1 = comp1[key]
      const value2 = comp2[key]
      let _key = name ? `${name}.${key}` : key
      deepCompare(value1, value2, _key, error)
    }
  } else if (Array.isArray(comp1) && Array.isArray(comp2)) {
    if (comp1.length !== comp2.length) {
      console.log(`数据不一致，分别为${comp1},${comp2}`)
      error.push(name)
    }
    let much =
      Object.keys(comp1).length > Object.keys(comp2).length ? comp1 : comp2
    for (const key in much) {
      debugger
      const value1 = comp1[key]
      const value2 = comp2[key]
      deepCompare(value1, value2, name, error)
    }
  } else {
    if (comp1 !== comp2) {
      console.log(`${name}数据不一致，分别为${comp1}   =>    ${comp2}`)
      error.push(name)
    }
  }
  return error
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
console.log(deepCompare(b, c))
