import React from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN

// WHAT IS THE DIFF BETWEEN USER SHOW AND EDIT MAP?

class UserShowMap extends React.Component{
  constructor() {
    super()
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.props.center,
      zoom: 11
    })

    this.map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')

    new mapboxgl.Marker()
      .setLngLat(this.props.center)
      .addTo(this.map)
  }

  render() {
    console.log('userShowMap', this.props.center)
    return (
      <div>
        <div className="map-register" ref={el => this.mapDiv = el} />
      </div>
    )
  }
}

export default UserShowMap
