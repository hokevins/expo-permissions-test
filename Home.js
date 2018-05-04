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
