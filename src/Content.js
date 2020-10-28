import React from 'react'
import Questions from './data/questions.json'

const shuffleData = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}
const content = (props) => {
  let randomQuestions = shuffleData(Questions)
  return (
    <div>
      {randomQuestions.map(quest => (<div>{quest.question}</div>))}
    </div>
  )
}

export default content