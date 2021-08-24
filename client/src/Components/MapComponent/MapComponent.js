import React from "react"
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps"

function Map() {
    return (
        <GoogleMap 
        defaultZoom={10}
        defaultCenter={{lat: -34.6156625 , lng: -58.503338}}>
                <Marker position={{lat: -34.6156625 , lng: -58.50}} />
        </GoogleMap>
    )
}

const MapComponent = withScriptjs(withGoogleMap(Map))

export default MapComponent