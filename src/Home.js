import React from 'react'
import Questions from './data/questions.json'
import { groupAnswers, shuffleData } from './HelperFunctions.js'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      started: false,
      completed: false,
      score: 0,
      questionNumber: 1,
      selected: '',
      checked: false
    }
    this.selectionMethod.bind(this)
  }
  selectionMethod(e) {
    this.state.selected = e.target.value
    console.log(this.state)
  }
  render() {
    let randomQuestions = shuffleData(Questions)
    let groupedAnswers = groupAnswers(randomQuestions[this.state.questionNumber].correct, randomQuestions[this.state.questionNumber].incorrect)


    return (
      <div>
        {(this.state.questionNumber < 11) ?

          (
            <div className="container center">
              <div>
                <h3>{this.state.score}/10</h3>
                <div>
                  <p>{this.state.questionNumber}.</p> {randomQuestions[this.state.questionNumber].question}
                </div>
                <div>
                  <ul>
                    {groupedAnswers.map(answer => (
                      <div key={answer}>
                        <li>
                          <input
                            type="checkbox"
                            id={answer}
                            value={answer}
                            onChange={(event) => this.selectionMethod(event)}

                          />
                          <label htmlFor={answer}>{answer}</label>
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>

              <button className='btn' onClick={() => this.setState({ started: false, completed: false, score: 0, questionNumber: 1 })}>Reset</button>

              <button className='btn' >Submit</button>

            </div>

          )
          :
          (
            <div className="container center">
              <h1>Your Score is {this.state.score}!</h1>
            </div>
          )}
      </div>
    )
  }
}