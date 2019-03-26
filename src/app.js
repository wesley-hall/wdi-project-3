import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'


import './style.scss'

import SecureRoute from './components/common/secureRoute'
import Nav from './components/common/nav'
import Home from './components/pages/home'

import Register from './components/auth/register'
import Login from './components/auth/login'


import BooksAll from './components/books/booksAll'
import BookShow from './components/books/bookShow'
import BookAdd from './components/books/bookAdd'
import BookUpdate from './components/books/bookUpdate'
import BookBorrow from './components/books/bookBorrow'
import Libraries from './components/books/libraries'

import IdsAll from './components/common/ids'

import LoansAll from './components/loans/loansAll'
import LoanAdd from './components/loans/loanAdd'
import UserProfile from './components/users/userprofile'


class App extends React.Component {

  render() {
    return(
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <SecureRoute path="/books/:id/update" component={BookUpdate}/>
            <SecureRoute path="/books/:id/borrow" component={BookBorrow}/>
            <SecureRoute path="/books/:id/loan" component={LoanAdd}/>
            <SecureRoute path="/books/add" component={BookAdd}/>
            <Route path="/books/:id" component={BookShow}/>
            <Route path="/libraries" component={Libraries}/>
            <Route path="/books" component={BooksAll}/>
            <Route path="/users" component={UserProfile}/>
            <Route path="/ids" component={IdsAll}/>

            <SecureRoute path="/loans" component={LoansAll}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
