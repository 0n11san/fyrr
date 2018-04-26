import React, { Component } from 'react';
import Map from "./components/map"

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="App">
        <Map
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB1SJ3HV5ZGZkOfwO96Hku1mK2rl3sT_5I&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;
