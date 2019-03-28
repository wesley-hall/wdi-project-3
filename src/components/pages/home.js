import React from 'react'

class Home extends React.Component {
  constructor() {
    super()

  }


  render() {
    return (
      <main className="hero is-bold backgroundHero is-fullheight-with-navbar">
        <div className="hero-body">

          <div className="container has-text-centered">
            <img className="bookerHero" src="http://www.orjon.com/dev/booker/images/bookerLogoBlack.png"/>
            <h1 className="title">
              The community library project
            </h1>
          </div>

        </div>
      </main>
    )
  }
}

export default Home
