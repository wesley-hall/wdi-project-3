import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class BookShow extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get(`/api/books/${this.props.match.params.id}`)
      .then(res => this.setState({ book: res.data }))
  }


  render() {
    console.log(this.state.book)
    if (!this.state.book) return null
    const { book } = this.state
    return(
      <div>
        <h1>Book Show</h1>
      </div>
    )
  }
}

export default BookShow
