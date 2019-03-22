import React from 'react'
import ReactDOM from 'react-dom'

// import axios from 'axios'

import Home from './components/pages/home'
import Register from './components/auth/register'

import BooksAll from './components/pages/booksAll'

class App extends React.Component {

  render() {
    return(

      <div>
        <h1>Hello World!</h1>
        <Home />
        <BooksAll />
        <Register />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
