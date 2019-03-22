import React from 'react'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      text: [
        'Paragraph 1',
        'Paragraph 2',
        'Paragraph 3',
        'Register',
        'Login'
      ]
    }
  }


  render() {
    const { text } = this.state

    return (
      <section id="home">
        <div className="container">
          <h1>Home</h1>
          {text.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
        </div>
      </section>
    )
  }
}

export default Home
