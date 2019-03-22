import React from 'react'
import ReactDOM from 'react-dom'

// import axios from 'axios'

import Home from './components/pages/home'

class App extends React.Component {

  render() {
    return(
      <div>
        <h1>Hello World!</h1>
        <Home />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
