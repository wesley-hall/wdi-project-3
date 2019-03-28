import React from 'react'

class ErrorPage extends React.Component {
  constructor() {
    super()

  }


  render() {
    return (
      <main className="hero is-bold is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
            404 error <span><i className="fas fa-book"></i></span>
            </h1>
            <div>
              <p> Sorry! The content you were looking for has been eaten by bookworms.</p>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default ErrorPage
