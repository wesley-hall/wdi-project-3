import React from 'react'
import axios from 'axios'

import LibrariesMap from './librariesMap'

class Libraries extends React.Component {
  constructor() {
    super()

    this.state = {
      libraries: []
    }
  }

  componentDidMount() {
    axios.get('/api/libraries')
      .then(users => console.log(users.data))
      .catch(err => console.log(err))
  }



  render() {
    return (
      <div>
        <h1>Libraries</h1>

      </div>
    )
  }
}

export default Libraries
