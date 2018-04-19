import React, { Component } from "react";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import { withGoogleMap, GoogleMap, Polygon } from "react-google-maps";
export default class GoogleMaps extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleMapLoad = this.handleMapLoad.bind(this);
  }
  handleMapLoad(map) {
    this._mapComponent = map;
  }

  render() {
    const MyGoogleMap = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          ref={props.onMapLoad}
          defaultZoom={props.zoom}
          defaultCenter={{ lat: props.lat, lng: props.lng }}
          onClick={props.onMapClick}
        >
          {props.coords.map(coord => (
            <Polygon
              path={coord.area}
              options={{
                fillColor: "red",
                fillOpacity: 0.4,
                strokeColor: "red",
                strokeOpacity: 1,
                strokeWeight: 1
              }}
            />
          ))}
        </GoogleMap>
      ))
    );

    // Use this by settings props in e.g <MyGoogleMap coords={coords} lat={50.0883800089} lng={14.3196645721} zoom={8}/>
    return (
      <div style={{ height: '640px', width: '100%' }}>
      <div style={{ height: "100%" }}>
        <MyGoogleMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBOGV1MxJRcgXxNULDXk1eUx_QQ6nftEP4`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
          onMapLoad={this.handleMapLoad}
          coords={this.props.coords}
          lat={this.props.lat}
          lng={this.props.lng}
          zoom={this.props.zoom}
        />
      </div>
      </div>
    );
  }
}
