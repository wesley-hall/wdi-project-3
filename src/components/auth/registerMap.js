import React from 'react'
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
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

    this.map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')

    this.map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken
    }))

    const marker = new mapboxgl.Marker({ draggable: true })

    const getLocation = ({ lngLat }) => {
      const location = { lat: lngLat.lat, lng: lngLat.lng }
      marker
        .setLngLat(location)
        .addTo(this.map)

      this.getMapboxPlace(location.lng, location.lat)
    }

    this.map.on('click', getLocation)
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
    return (
      <div>
        <div className="map-register" ref={el => this.mapDiv = el} />
        <p>{address.place_name}</p>
      </div>
    )
  }
}

export default RegisterMap
