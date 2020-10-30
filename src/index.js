import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Home from './Home.js'

const App = () => {
  return (
    <div style={{ fontFamily: 'DejaVu Sans Mono, monospace', backgroundColor: '#fbf3e3' }}>
      <Header />
      <Home />
    </div>
  )
}

ReactDOM.render(<App />,
  document.querySelector('#root'))