import React from 'react'
import ReactDOM from 'react-dom'

// import axios from 'axios'

import Home from './components/pages/home'

import BooksAll from './components/pages/booksAll'

class App extends React.Component {

  render() {
    return(
      <div>
        <h1>Hello World!</h1>
        <Home />
        <BooksAll />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
