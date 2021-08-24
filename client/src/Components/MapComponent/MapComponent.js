import React from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps'

function Map({location}) {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat:location.lat, lng: location.lng }}
    >
      <Marker position={{ lat:location.lat, lng: location.lng }} />
    </GoogleMap>
  )
}

const MapComponent = withScriptjs(withGoogleMap(Map))

export default MapComponent
