import React from 'react'
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
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
      zoom: 14.5
    })

    this.map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken
    }))

    this.setLibraryMarkers()
    this.setUserMarker()
  }

  setLibraryMarkers() {
    const libraries = this.props.libraries.filter(library => library.owner !== this.props.currentUserId)


    this.markers = libraries.map(library => {
      const markerLibraries = document.createElement('div')
      markerLibraries.className = 'marker-libraries'

      const markerText = document.createElement('span')
      markerText.innerHTML = library.books.length

      markerLibraries.appendChild(markerText)

      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <h2 class="title is-4">${library.libraryName}</h2>
          <div id=${'libraries-popup-container'}>
            <img src=${library.libraryPicture} alt=${library.libraryName} />
            <p class="subtitle is-6">${library.libraryDescription}</p>
            <a class="button is-small is-link" href=${'/books'}><p>See all books</p></a>
          </div>
        `)

      return new mapboxgl.Marker(markerLibraries)
        .setLngLat(library.location)
        .setPopup(popup)
        .addTo(this.map)
    })
  }

  setUserMarker() {
    const userLibrary = this.props.libraries.filter(library => library.owner === this.props.currentUserId)

    userLibrary.map(library => {
      const markerUserLibrary = document.createElement('div')
      markerUserLibrary.className = 'marker-user-library'

      const markerText = document.createElement('span')
      markerText.innerHTML = library.books.length

      markerUserLibrary.appendChild(markerText)

      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <h2 class="title is-5">My library: ${library.libraryName}</h2>
          <div id=${'libraries-popup-container'}>
            <img id=${'libraries-map-picture'} src=${library.libraryPicture} alt=${library.libraryName} />
            <p class="subtitle is-6">${library.libraryDescription}</p>
            <a class="button is-small is-link is-pulled-left" href=${'/books'}><p>See all books</p></a>
            <a class="button is-small buttonBookUpdate is-pulled-right is-marginless" href=${'/users'}><p>View/edit my profile</p></a>
          </div>

        `)

      return new mapboxgl.Marker(markerUserLibrary)
        .setLngLat(library.location)
        .setPopup(popup)
        .addTo(this.map)

    })

    // const markerText = document.createElement('span')
    // markerText.innerHTML = userLibrary.
    //
    // return new mapboxgl.Marker(markerUserLibrary)
    //   .setLngLat(this.props.center)
    //   .setPopup
    //   .addTo(this.map)
  }


  render() {
    return (
      <div className="map-libraries" ref={el => this.mapDiv = el} />
    )
  }
}

export default LibrariesMap
