import React from 'react'

class AboutUs extends React.Component {
  constructor() {
    super()

  }


  render() {
    return (
      <main className="hero is-bold is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Booker: The community library project
            </h1>
            <div>
              <h2> What is Booker?</h2>
            </div>
            <div className="container">
              <p> Share your personal book collection. Borrow the book you need from people local to you. opportunities to meet people with similar interests in your area.</p>
            </div>
            <div className="container">
              <p>You can use this website to create an online library of books you wish to share with your friends, family or local community. </p>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default AboutUs
