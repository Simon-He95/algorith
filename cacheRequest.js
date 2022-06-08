function request() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: 'simon'
      })
    }, 2000)
  })
}

const cacheMap = new Map()

function cacheRequest(url, options) {
  let key = `${url}:${options.methods}`
  if (cacheMap.has(key)) {
    if (cacheMap.get(key).status === 'pending') {
      return cacheMap.get(key).wait
    }
    return Promise.resolve(cacheMap.get(key).data)
  } else {
    cacheMap.set(key, { status: 'pending', wait: request(url, options) })
    request(url, options).then(res => {
      cacheMap.set(key, { status: 'resolved', value: res })
      return Promise.resolve(res)
    }).catch(err => {
      cacheMap.set(key, { status: 'rejected', value: err })
      return Promise.reject(err)
    })
  }
}

async function execute() {
  let p1 = await cacheRequest('/api/user', { methods: 'get' })
  console.log(p1.data)
  let p2 = await cacheRequest('/api/user', { methods: 'get' })
  console.log(p1, p2)
}
execute()
