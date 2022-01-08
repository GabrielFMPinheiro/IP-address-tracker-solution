import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import tw, { styled } from 'twin.macro'
import { Icon } from 'leaflet'
import { connect } from 'react-redux'

import marker from '../../images/icon-location.svg'
import ChangeMapView from './ChangeMapView'

const MapStyled = styled(MapContainer)`
  ${
    tw`
      absolute 
      top-73 
      sm:top-71 
      bottom-0 
      left-0 
      right-0 
      z-10
    `
  }
`
const icon = new Icon({
  iconUrl: marker,
  iconSize: [40, 50],
});

class Map extends Component {

  render() {
    const {data} = this.props;
    const position = [data.lat, data.lng]

    return (
        <MapStyled center={ position } zoom={ 20 } scrollWheelZoom={true}>
            
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <ChangeMapView coords={position} />

          <Marker position={position} icon={icon} />

        </MapStyled>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.fetchAPI.data.location,
  isFetching: state.fetchAPI.isFetching,
})

export default connect(mapStateToProps)(Map)