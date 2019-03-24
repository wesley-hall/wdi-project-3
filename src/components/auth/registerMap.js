import React from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN

import axios from 'axios'

class RegisterMap extends React.Component{
  constructor() {
    super()
    this.state = {
      address: {}
    }
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.props.center,
      zoom: 11
    })

    const marker = new mapboxgl.Marker({ draggable: true })
    marker
      .setLngLat(this.props.center)
      .addTo(this.map)

    const getMarkerLocation = () => {
      const markerLocation = marker.getLngLat()
      axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${markerLocation.lng},${markerLocation.lat}.json`, {
        params: {
          access_token: mapboxgl.accessToken
        }
      })
        .then(res => this.setState({ address: res.data.features[0] }))
        .catch(err => console.log(err))
      const location = { lat: markerLocation.lat, lng: markerLocation.lng }
      this.props.onSelectLocation(location)
    }

    marker.on('dragend', getMarkerLocation)
  }

  render() {
    if (!this.state.address) return null
    const { address } = this.state
    console.log('address', address)
    return (
      <div>
        <div className="map-register" ref={el => this.mapDiv = el} />
        <p>{address.place_name}</p>
      </div>
    )
  }
}

export default RegisterMap
