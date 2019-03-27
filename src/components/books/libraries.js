import React from 'react'
import axios from 'axios'

import LibrariesMap from './librariesMap'
import Auth from '../../lib/auth'

class Libraries extends React.Component {
  constructor() {
    super()

    this.state = {
      center: {
        lat: 51.515447,
        lng: -0.071510
      }
    }
  }
  
  componentDidMount() {
    this.getUserLocation()
    axios.get('/api/libraries')
      .then(res => {
        console.log(res.data)
        this.setState({ libraries: res.data })
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate() {
    this.getUserLocation()
  }

  displayLibraryInfo() {
    this.state.libraries
  }

  getUserLocation() {
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => {
        const center = { lat: res.data.location.lat,
          lng: res.data.location.lng }
        this.setState({ center: center })
      })
  }


  render() {
    if (!this.state.libraries) return null
    const { center, libraries } = this.state
    console.log('libraries', libraries)
    console.log('libraries[0] books length', libraries[0].books.length)
    return (
      <div>
        <LibrariesMap
          center={center}
          points={libraries}
        />
      </div>
    )
  }
}

export default Libraries
