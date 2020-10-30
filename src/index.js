import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Trivia from './Trivia'

const App = () => {
  return (
    <div style={{ fontFamily: 'DejaVu Sans Mono, monospace', backgroundColor: '#fbf3e3' }}>
      <Header />
      <Trivia />
    </div>
  )
}

ReactDOM.render(<App />,
  document.querySelector('#root'))

export default App