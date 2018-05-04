import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './Home';
import GyroscopeSensor from './GyroscopeSensor';
import Localization from './Localization';
import ImagePicker from './ImagePicker';
import Location from './Location';
import Pedometer from './Pedometer';
import MapView from './MapView';
import WebBrowser from './WebBrowser';
import Magnetometer from './Magnetometer';
import Lottie from './Lottie';
import LinearGradient from './LinearGradient';
import LinearGradientBlackFade from './LinearGradientBlackFade';
import Camera from './Camera';
import Accelerometer from './Accelerometer';
import QRCodeScanner from './QRCodeScanner';

const RootNavigator = StackNavigator(
  {
    Home: {
      screen: Home
    },
    GyroscopeSensor: {
      screen: GyroscopeSensor
    },
    Localization: {
      screen: Localization
    },
    ImagePicker: {
      screen: ImagePicker
    },
    Location: {
      screen: Location
    },
    Pedometer: {
      screen: Pedometer
    },
    MapView: {
      screen: MapView
    },
    WebBrowser: {
      screen: WebBrowser
    },
    Magnetometer: {
      screen: Magnetometer
    },
    Lottie: {
      screen: Lottie
    },
    LinearGradient: {
      screen: LinearGradient
    },
    LinearGradientBlackFade: {
      screen: LinearGradientBlackFade
    },
    Camera: {
      screen: Camera
    },
    Accelerometer: {
      screen: Accelerometer
    },
    QRCodeScanner: {
      screen: QRCodeScanner
    }
  },
  {
    headerMode: 'none'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}
