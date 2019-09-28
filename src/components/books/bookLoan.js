import React from 'react'
import axios from 'axios'


import Auth from '../../lib/auth'

class BookLoan extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        start: new Date(),
        end: new Date()
      },
      errors: {
      }
    }

    this.handleBack = this.handleBack.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.getUserLocation()
    axios.get(`/api/books/${this.props.match.params.id}`)
      .then(res => this.setState({ book: res.data }))
  }

  getUserLocation() {
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => {
        const userLat = res.data.location.lat
        const userLng = res.data.location.lng
        this.setState({ userLat: userLat, userLng: userLng })
      })
  }


  handleChange({ target: { name , value }}) {
    const data = {...this.state.data, [name]: value }
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data,errors })
  }

  handleSubmit(e){
    e.preventDefault()
    if (this.dateValidation(this.state.data.start, this.state.data.end)) {
      axios.post(`/api/books/${this.props.match.params.id}/loan`, this.state.data,
        { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
        .then(() => this.props.history.push('/loans'))
        .catch(err => {
          console.log('the error is', err)
          this.setState({errors: err.response.errors})
        })
    }
  }


  handleBack() {
    this.props.history.push(`/books/${this.props.match.params.id}`)
  }


  ratingAverage(ratingArray) {
    let sum = 0
    for (let i=0; i < ratingArray.length; i++) {
      sum += ratingArray[i].rating
    }
    return sum/ratingArray.length
  }

  filteredDates() {
    return this.state.book.existingLoans.filter(loan => new Date(loan.end) > new Date())
  }

  dateValidation(startDate, endDate) {
    startDate = new Date(startDate)
    endDate = new Date(endDate)
    const today=new Date()
    if (startDate > endDate) {
      return false
    }//End before start!')

    if (startDate < today) {
      return false
    }//In the past')
    if (startDate === endDate) {
      return false
    }

    // if (startDate < today) {
    //   console.log('that is in the past!')
    //   return false
    // }//In the past')
    // if (startDate === endDate) {
    //   console.log('at least one day')
    //   return false
    // }

    const loanDates = this.state.book.existingLoans.filter(loan => new Date(loan.end) > new Date())

    for (let i=0; i<loanDates.length; i++){
      const start = new Date(loanDates[i].start)
      const end = new Date(loanDates[i].end)
      if (((startDate<start) && (endDate>end))  ||
          ((startDate>start) && (endDate<end))  ||
          ((startDate<start) && (endDate>start))||
          ((startDate<end) && (endDate>end))  ||
          ((startDate<end) && (endDate>start))) {
        return false //intersecting
      }
    }
    return true
  }

  render() {
    if (!this.state.book) return null
    const { book } = this.state
    console.log('state: ',this.state)
    console.log('errors', this.state.errors)
    return(
      <div>
        <main className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h2 className="title">{book.title}</h2>
                <h3 className="title is-4">by: {book.authors}</h3>
              </div>
              <div className="column">
                <div>
                  <button className="button is-warning is-pulled-right" onClick={this.handleBack}>&lt; Back</button>
                </div>
              </div>
            </div>
            <hr />
            <div className="columns">
              <div className="column is-third">
                <figure className="image bookCoverWrapper">
                  <img id="bookCoverImage" src={book.image} alt={book.title} />
                </figure>
              </div>
              <div className="column is-two-thirds">
                <form
                  className="update"
                  onSubmit={this.handleSubmit}
                >
                  <div className="columns">

                    <div className="column">
                      <br />
                      <h1>Request collect date:</h1>
                      <input
                        className="input"
                        type="date"
                        name="start"
                        value={this.state.data.start}
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className="column">
                      <br />
                      <h1>Return date:</h1>
                      <input
                        className="input"
                        type="date"
                        name="end"
                        value={this.state.data.end}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <br />
                  <button className="button is-info is-pulled-right">
                    Send request &#62;&#62;
                  </button>
                </form>
              </div>
            </div>

            <hr />
            <div className="container">
              {!this.filteredDates() && <h4 className="is-7">Currently reserved for these dates:</h4>}
              {book.existingLoans && this.filteredDates().map(loan => (
                <div key={loan._id}>
                  <h5 className="subtitle is-6" >
                    {loan.start.substring(10,-5)} to {loan.end.substring(10,-5)}
                  </h5>
                </div>))}
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default BookLoan
