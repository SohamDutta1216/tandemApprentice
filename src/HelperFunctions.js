
const shuffleData = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}

const groupAnswers = (arr1, arr2) => {
  let grouped = []
  for (let i = 0; i < arr1.length; i++) {
    grouped.push(arr1[i])
  }
  for (let i = 0; i < arr2.length; i++) {
    grouped.push(arr2[i])
  }
  return grouped
}

module.exports = {
  shuffleData,
  groupAnswers
}