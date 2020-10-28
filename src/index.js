import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Home from './Home.js'

const App = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  )
}

ReactDOM.render(<App />,
  document.querySelector('#root'))