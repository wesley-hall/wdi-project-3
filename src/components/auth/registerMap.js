import React from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN

import axios from 'axios'

class RegisterMap extends React.Component{
  constructor() {
    super()
    this.state = {
      data: {
        address: {}
      }
    }
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.props.center,
      zoom: 10
    })

    const marker = new mapboxgl.Marker({ draggable: true })
    marker
      .setLngLat(this.props.center)
      .addTo(this.map)

    const getMarkerLocation = () => {
      const markerLocation = marker.getLngLat()
      const location = { lat: markerLocation.lat, lng: markerLocation.lng }
      console.log('location', location)
      this.props.onSelectLocation(location)
      this.getMapboxPlace(markerLocation.lng, markerLocation.lat)
    }

    marker.on('dragend', getMarkerLocation)
  }

  getMapboxPlace(lng, lat) {
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json`, {
      params: {
        access_token: mapboxgl.accessToken
      }
    })
      .then(res => {
        const address = res.data.features[0]
        const data = {...this.state.data, address}
        this.setState({ data })
      })
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.data.address) return null
    const { address } = this.state.data
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
