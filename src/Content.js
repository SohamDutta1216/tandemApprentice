import React from 'react'
import Questions from './data/questions.json'

const content = () => {
  return (
    <div>
      {Questions.map(question => (
        <div>{question.question} </div>
      )
      )}
    </div>
  )
}

export default content