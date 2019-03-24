import React from 'react'
import axios from 'axios'

import LibrariesMap from './librariesMap'

class Libraries extends React.Component {
  constructor() {
    super()

    this.state = {
      // center should be the current user's home/library location
      center: {
        lat: 51.509865,
        lng: -0.118092
      }
    }
  }

  componentDidMount() {
    axios.get('/api/libraries')
      .then(res => {
        console.log(res.data)
        this.setState({ libraries: res.data })
      })
      .catch(err => console.log(err))
  }

  displayLibraryInfo() {
    this.state.libraries
  }


  render() {
    if (!this.state.libraries) return null
    const { center, libraries } = this.state
    console.log('libraries', libraries)
    console.log('libraries[0] books length', libraries[0].books.length)
    return (
      <div>
        <h1>Libraries</h1>
        <div>
          <LibrariesMap
            center={center}
            points={libraries}
          />
        </div>
        <div>
          {libraries.map(library => (
            library.books.length !== 0 &&
              <div key={library.owner}>
                <h3>{library.libraryName}</h3>
                <h4>Books:</h4>
                <ul>
                  {library.books.map(book => (
                    <li key={book._id}>
                      {book.title}
                    </li>
                  ))}
                </ul>
              </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Libraries
