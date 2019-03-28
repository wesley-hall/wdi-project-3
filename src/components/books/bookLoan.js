import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


import Auth from '../../lib/auth'

class BookLoan extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        message: '',
        start: new Date(),
        end: new Date()
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
        .catch(err => this.setState({errors: err.response.errors}))
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
    startDate=new Date(startDate)
    endDate=new Date(startDate)
    console.log('startDate: ',startDate)
    console.log('endDate: ',endDate)
    const today=new Date()
    if (startDate > endDate) {
      console.log('End before start!')
      return false
    }//End before start!')
    // if (startDate < today) {
    //   console.log('that is in the past!')
    //   return false
    // }//In the past')
    if (startDate === endDate) {
      console.log('at least one day')
      return false
    }//less than one day')
    const loanDates = this.state.book.existingLoans.filter(loan => new Date(loan.end) > new Date())

    for (let i=0; i<loanDates.length; i++){
      const start = new Date(loanDates[i].start)
      const end = new Date(loanDates[i].end)
      console.log('start: ',start)
      console.log('end: ',end)
      console.log('==============')
      if (((startDate<start) && (endDate>end))  ||
          ((startDate>start) && (endDate<end))  ||
          ((startDate<start) && (endDate>start))||
          ((startDate<end) && (endDate>end))  ||
          ((startDate<end) && (endDate>start))) {
        console.log('rejected for some reason')
        return false //intersecting
      }
    }
    console.log('MEETS CRITERIA!')
    return true
  }

  render() {
    if (!this.state.book) return null
    const { book } = this.state
    //
    console.log('state: ',this.state)

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
                      <h1>Reqest collect date:</h1>
                      <input
                        className="input"
                        type="date"
                        name="start"
                        value={this.state.data.start}
                        onChange={this.handleChange}
                      />

                    </div>
                    <div className="column">
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


                  <div>
                    <p>Message to book owner: <br />
                      <textarea
                        className="textarea"
                        name="message"
                        placeholder="Please enter a descriptive message"
                        value={this.state.data.message}
                        onChange={this.handleChange}
                      />
                    </p>
                  </div>
                  <br />
                  <button className="button is-success is-pulled-right">
                    Request
                  </button>

                </form>

              </div>

            </div>

            <hr />
            <div className="container">
              <h4 className="is-7">Currently reserved for these dates:</h4>

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
//
// import DatePicker from 'react-datepicker'
//
// import 'react-datepicker/dist/react-datepicker.css'
// <DatePicker
//   openToDate={new Date()}
//   selected={this.state.startDate}
//   onChange={this.handleChange}
// />

//
// <input
//   className="input"
//   type="date"
//   name="startDate"
//   placeholder="YYYY-MM-DD"
//   min= {new Date()}
//   value={this.state.startDate}
//   onChange={this.handleChange}
// />

// <input
//   className="input"
//   type="date"
//   name="endDate"
//   placeholder="YYYY-MM-DD"
//   value={this.state.endDate}
//   onChange={this.handleChange}
// />

                      //
                      //
                      //
                      // <DatePicker
                      //   dateFormat="YYYY/MM/dd"
                      //   name="start"
                      //   selected={this.state.start}
                      //   value={this.state.start}
                      //   onChange={this.handleDateChange}
                      // />
