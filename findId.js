
function mockRequest() {
  const array = [
    {
      id: 'u01',
      name: 'simon'
    },
    {
      id: 'u02',
      name: "demo"
    }
  ]
  const map = array.reduce((pre, cur, idx) => {
    pre[cur.id] = idx
    return pre
  }, {})
  return [array, map]
}

const [array, map] = mockRequest()
console.log(array, map)
function findId(id) {
  // O(1)查找,避免每次forEach O(n)
  const index = map[id]
  return array[index]
}
console.log(findId('u02'))

