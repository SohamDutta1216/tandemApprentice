import React from 'react'
import Questions from './data/questions.json'
import { groupAnswers, shuffleData } from './HelperFunctions.js'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first10: shuffleData(Questions),
      score: 0,
      questionNumber: 1,
      selected: '',
      shuffle: true,
      shuffledAnswers: []

    }
    this.selectionMethod = this.selectionMethod.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleShuffle = this.handleShuffle.bind(this)
  }
  selectionMethod(e) {
    if (this.state.selected === e.target.value) {
      this.setState({ selected: '' })
    } else {
      this.setState({ selected: e.target.value })
    }
    console.log(this.state)
  }

  handleSubmit(selected, correct) {
    if (selected === correct) {
      this.setState({ score: this.state.score + 1, selected: '', questionNumber: this.state.questionNumber + 1, shuffle: true })
    } else {
      alert(`Sorry! the correct answer is ${correct}`)
      this.setState({ selected: '', questionNumber: this.state.questionNumber + 1, shuffle: true })
    }
    console.log('submit', this.state)
  }
  // handle shuffle needs to shuffle each round
  handleShuffle(arr) {
    if (this.state.shuffle === true) {
      this.state.shuffle = false
      this.state.shuffledAnswers = shuffleData(arr)
    }
    return this.state.shuffledAnswers
  }

  render() {
    let randomQuestions = this.state.first10
    let groupedAnswers = groupAnswers(randomQuestions[this.state.questionNumber].correct, randomQuestions[this.state.questionNumber].incorrect)
    let answers = this.handleShuffle(groupedAnswers)
    return (
      <div>
        {
          (this.state.questionNumber < 11) ?
            (
              <div className=" container center">
                <div className="card">
                  <h4>{this.state.score}/10</h4>
                  <h5>
                    <p>Question {this.state.questionNumber}</p> {randomQuestions[this.state.questionNumber].question}
                  </h5>
                  <div>
                    <ul>
                      {answers.map(answer => (
                        <div key={answer}>
                          <li>
                            <input
                              type="checkbox"
                              id={answer}
                              value={answer}
                              checked={this.state.selected === answer}
                              onClick={(e) => this.selectionMethod(e)}
                              onChange={(e) => this.selectionMethod(e)}
                            />
                            <label htmlFor={answer}>{answer}</label>
                          </li>
                        </div>
                      )
                      )
                      }
                    </ul>
                  </div>
                </div>

                <button className='btn-large' onClick={() => this.setState({ started: false, completed: false, score: 0, questionNumber: 1, first10: shuffleData(Questions) })}>Reset</button>

                <button className='btn-large' onClick={() => this.handleSubmit(this.state.selected, randomQuestions[this.state.questionNumber].correct)}>
                  Submit
                </button>

              </div>
            )
            :
            (
              <div className="container center">

                <h1>Your Score is {this.state.score}!</h1>

                <button className="btn"
                  onClick={() => this.setState({ score: 0, questionNumber: 1, selected: '', first10: shuffleData(Questions) })}
                > Try Again
              </button>

              </div>
            )}
      </div>
    )
  }
}