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
      defaultZoom={6}
      defaultCenter={{ lat:parseFloat(location?.lat), lng: parseFloat(location?.lng) }}
    >
      <Marker position={{ lat:parseFloat(location?.lat), lng: parseFloat(location?.lng) }} />
    </GoogleMap>
  )
}

const MapComponent = withScriptjs(withGoogleMap(Map))

export default MapComponent
