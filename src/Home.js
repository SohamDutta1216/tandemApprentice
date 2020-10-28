import React from 'react'
import Content from './Content.js'

class Home extends React.Component {
  state = {
    started: false,
    complete: false
  }
  render() {
    return (
      (this.state.started) ? (<div>
        <Content />
      </div >) : (<div>
        <button onClick="started">Start</button>
      </div>)
  }
    )
}


export default Home