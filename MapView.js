import React from 'react';
import { MapView } from 'expo';

import NavBar from './NavBar';

export default class App extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <NavBar />
      </MapView>
    );
  }
}
