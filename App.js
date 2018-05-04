import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './Home';
import GyroscopeSensor from './GyroscopeSensor';
import Localization from './Localization';
import ImagePicker from './ImagePicker';
import Location from './Location';

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
