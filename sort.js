// 插入排序
function insertSort(array) {
  if (array === null || array.length < 2) {
    return
  }
  let N = array.length

  for (let end = 1; end < N; end++) {
    let newIndex = end
    while (newIndex >= 0 && array[newIndex - 1] > array[newIndex]) {
      swap(array, newIndex - 1, newIndex)
      newIndex--
    }
  }
}

// 选择排序
function selectSort(array) {
  if (array === null || array.length < 2) {
    return
  }
  let N = array.length
  for (let i = 0; i < N; i++) {
    let minValueIndex = i
    for (let j = i + 1; j < N; j++) {
      if (array[j] < array[minValueIndex]) {
        minValueIndex = j
      }
    }
    swap(array, i, minValueIndex)
  }
}

// 冒泡排序
function bubbleSort(array) {
  if (array === null || array.length < 2) {
    return
  }
  let N = array.length
  for (let end = N - 1; end >= 0; end--) {
    for (let i = 0; i < end; i++) {
      if (array[i] >= array[i + 1]) {
        swap(array, i, i + 1)
      }
    }
  }
}

function swap(array, a, b) {
  const temp = array[b]
  array[b] = array[a]
  array[a] = temp
}

function sort(array) {
  console.log(array)
  // insertSort(array)
  // selectSort(array)
  bubbleSort(array)
  console.log(array)
}

sort([5, 4, 7, 1, 3, 3, 2, 8])
