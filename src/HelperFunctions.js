const shuffleData = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const groupAnswers = (correct, incorrect) => {
  let grouped = []
  for (let i = 0; i < incorrect.length; i++) {
    grouped.push(incorrect[i])
  }
  grouped.push(correct)
  return shuffleData(grouped)
}

module.exports = {
  shuffleData: shuffleData,
  groupAnswers: groupAnswers
}