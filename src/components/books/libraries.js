import React from 'react'
import axios from 'axios'

import LibrariesMap from './librariesMap'

class Libraries extends React.Component {
  constructor() {
    super()

  }

  // componentDidMount() {
  //   axios.get('/api/')
  // }



  render() {
    return (
      <div>
        <h1>Libraries</h1>
        <LibrariesMap
          center={this.mapCenter}
          points={this.state.points}
          onClick={this.handleClick}
        />
      </div>
    )
  }
}

export default Libraries
