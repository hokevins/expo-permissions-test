import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a React-Native Expo Permissions Test</Text>
        <Button
          title="GyroscopeSensor"
          onPress={() => this.props.navigation.navigate('GyroscopeSensor')}
        />
        <Button
          title="Localization"
          onPress={() => this.props.navigation.navigate('Localization')}
        />
        <Button
          title="ImagePicker"
          onPress={() => this.props.navigation.navigate('ImagePicker')}
        />
        <Button
          title="Location"
          onPress={() => this.props.navigation.navigate('Location')}
        />
        <Button
          title="Pedometer"
          onPress={() => this.props.navigation.navigate('Pedometer')}
        />
        <Button
          title="MapView"
          onPress={() => this.props.navigation.navigate('MapView')}
        />
        <Button
          title="WebBrowser"
          onPress={() => this.props.navigation.navigate('WebBrowser')}
        />
        <Button
          title="Magnetometer"
          onPress={() => this.props.navigation.navigate('Magnetometer')}
        />
        <Button
          title="Lottie"
          onPress={() => this.props.navigation.navigate('Lottie')}
        />
        <Button
          title="LinearGradient"
          onPress={() => this.props.navigation.navigate('LinearGradient')}
        />
        <Button
          title="LinearGradientBlackFade"
          onPress={() => this.props.navigation.navigate('LinearGradientBlackFade')}
        />
        <Button
          title="Camera"
          onPress={() => this.props.navigation.navigate('Camera')}
        />
        <Button
          title="Accelerometer"
          onPress={() => this.props.navigation.navigate('Accelerometer')}
        />
        <Button
          title="QRCodeScanner"
          onPress={() => this.props.navigation.navigate('QRCodeScanner')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
