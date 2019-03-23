import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'

import SecureRoute from './components/common/secureRoute'
import Nav from './components/common/nav'
import Home from './components/pages/home'

import Register from './components/auth/register'
import Login from './components/auth/login'


import BooksAll from './components/books/booksAll'
import BookShow from './components/books/bookShow'
import BookAdd from './components/books/bookAdd'
import BookUpdate from './components/books/bookUpdate'
import Libraries from './components/books/Libraries'




class App extends React.Component {

  render() {
    return(
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <SecureRoute path="/books/:id/update" component={BookUpdate}/>
            <SecureRoute path="/books/add" component={BookAdd}/>
            <Route path="/books/:id" component={BookShow}/>
            <Route path="/libraries" component={Libraries}/>
            <Route path="/books" component={BooksAll}/>

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
// import LoansAll from './components/loans/loansAll'
// import LoanAdd from './components/loans/loanAdd'
// import LoanApproval from './components/loans/loanApproval'
// <SecureRoute path="/loans/:id/approval" component={LoanApproval}/>
// <SecureRoute path="/loans/add" component={LoanAdd}/>
// <SecureRoute path="/loans" component={LoansAll}/>
