import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
// import GoogleMap from './GoogleMap'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
   <Hello />
  </div>
);

render(<App />, document.getElementById('root'));