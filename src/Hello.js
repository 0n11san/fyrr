import React from 'react';
import MyGoogleMap from './GoogleMap'
import coords from './const'

export default class Hello extends React.Component {
  render() {
    return(
      <MyGoogleMap coords={coords} lat={50.0883800089} lng={14.3196645721} zoom={8} />
    )
  }
}