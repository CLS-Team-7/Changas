import React from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps'

function Map({location}) {
  return (
    <>
    {location ? 
    <GoogleMap
      defaultZoom={6}
      defaultCenter={{ lat:parseFloat(location?.lat), lng: parseFloat(location?.lng) }}
    >

      <Marker position={{ lat:location?.lat, lng: location?.lng }} />
    </GoogleMap> : <h1 className="text-gray-900 pb-4 text-2xl title-font font-medium mb-1">Cargando el mapa...</h1> }
    </>

  )
}

const MapComponent = withScriptjs(withGoogleMap(Map))

export default MapComponent
