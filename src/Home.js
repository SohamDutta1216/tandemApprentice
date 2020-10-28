import React from 'react'
import Content from './Content.js'

export default class Home extends React.Component {
  state = {
    started: false,
    completed: false
  }
  render() {
    return (
      <div>
        {this.state.started ? (<div className="container center">>
          <Content completed={this.state.completed} />
          <button onClick={() => this.setState({ started: false })}>Reset</button>
        </div>) :
          (<div className="container center">
            <button onClick={() => this.setState({ started: true })} className="btn center" >Start</button>
          </div>)}
      </div>
    )
  }
}