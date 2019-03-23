import React from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN

class LibrariesMap extends React.Component {
  constructor() {
    super()

    this.markers = []
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.props.center,
      zoom: 14
    })

    this.setMarkers()

    this.map.on('click', this.props.onClick)
  }

  componentDidUpdate() {
    this.setMarkers()
  }

  setMarkers() {
    this.markers.forEach(marker => marker.remove())
    this.markers = this.props.points.map(point => {
      return new mapboxgl.Marker()
        .setLngLat({ lat: point.lat, lng: point.lon })
        .addTo(this.map)
    })
  }


  render() {
    return (
      <div>
        <div className="map-libraries" ref={el => this.mapDiv = el} />
      </div>
    )
  }
}

export default LibrariesMap
