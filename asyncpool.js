
function delay(interval) {
  return () => new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(interval)
      if (interval > 10000) {
        reject(interval)
      } else {
        resolve(interval)
      }
    }, interval)
  })
}

const tasks = [
  delay(1000),
  delay(2000),
  delay(3000),
  delay(4000),
  delay(5000),
  delay(6000),
  delay(7000),
  delay(1000)
]


function asyncPool(limit = 4, tasks) {
  console.log(tasks)
  const maxLength = tasks.length
  let results = [],
    count = 0,
    executing = new Array(limit).fill(0)
  executing = executing.map(() => new Promise((resolve, reject) => {
    const run = () => {
      if (count >= maxLength) {
        resolve()
        return
      }
      let index = count
      const task = tasks[count++]
      task().then(result => {
        results[index] = result
        run()
      }).catch(reason => reject(reason))
    }
    run()
  }))
  return Promise.all(executing).then(() => results)
}
asyncPool(4, tasks).then(res => {
  console.log(res)
})


