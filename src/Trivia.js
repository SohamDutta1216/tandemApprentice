import React from 'react'
import Questions from './data/questions.json'
import { groupAnswers, shuffleData } from './HelperFunctions'

export default class Trivia extends React.Component {
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
  }

  handleSubmit(selected, correct) {
    if (selected === correct) {
      this.setState({ score: this.state.score + 1, selected: '', questionNumber: this.state.questionNumber + 1, shuffle: true })
    } else {
      alert(`Sorry! the correct answer is ${correct}`)
      this.setState({ selected: '', questionNumber: this.state.questionNumber + 1, shuffle: true })
    }
  }

  handleShuffle(arr) {
    if (this.state.shuffle === true) {
      this.setState({ shuffle: false, shuffledAnswers: shuffleData(arr) })
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
                <h4 style={{ color: '#6c6f45', marginTop: '50px' }}>Score : {this.state.score}/10</h4>
                <div style={{ backgroundColor: '#fcd9d2', marginTop: '50px' }} className="card">

                  <h5 style={{ color: '#6c6f45' }}>
                    <p style={{ color: '#6c6f45', marginBottom: '20px', marginTop: '20px', fontSize: '20px' }}>Question {this.state.questionNumber}</p>
                    {randomQuestions[this.state.questionNumber].question}
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
                            <label style={{ color: '#6c6f45', fontSize: '20px', marginBottom: '20px', marginTop: '20px' }} htmlFor={answer}>{answer}</label>
                          </li>
                        </div>
                      )
                      )
                      }

                    </ul>
                  </div>
                </div>

                <button htmlFor='reset' style={{ backgroundColor: '#6c6f45', color: '#fcd9d2', marginTop: '100px', marginRight: '90px' }} className='btn-large' onClick={() => window.location.reload(false)}>Reset</button>

                <button htmlFor='submit' style={{ backgroundColor: '#6c6f45', color: '#fcd9d2', marginTop: '100px', marginLeft: '90px' }} className='btn-large' id='#submitButton' onClick={() => this.handleSubmit(this.state.selected, randomQuestions[this.state.questionNumber].correct)}>
                  Submit
                </button>

              </div>
            )
            :
            (
              <div style={{ backgroundColor: '#fbf3e3' }} className="center">

                <h1 style={{ color: '#6c6f45', fontSize: '110px', marginTop: '100px' }}
                >Your Score is {this.state.score} out of 10!</h1>

                <button
                  htmlFor='tryAgain'
                  style={{ backgroundColor: '#6c6f45', color: '#fcd9d2', marginTop: '50px' }}
                  className="btn-large"
                  onClick={() => this.setState({ score: 0, questionNumber: 1, selected: '', first10: shuffleData(Questions) })}
                > Try Again
              </button>

              </div>
            )}
      </div>
    )
  }
}