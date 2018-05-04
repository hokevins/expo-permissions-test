import React from 'react';
import { Button, Image, View, Platform, Text } from 'react-native';
import { ImagePicker, Permissions } from 'expo';

import NavBar from './NavBar';

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
    errorMessage: null
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on an Android emulator. Try it on your device!',
      });
    } else {
      this._pickImage();
    }
  }

  render() {
    let { image } = this.state;
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.image) {
      text = this.state.image;
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <NavBar />
        <Text>{text}</Text>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }

  _pickImage = async () => {
    let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access camera roll was denied',
      });
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    alert(JSON.stringify(result));

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}
