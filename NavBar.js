import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 50
  },
});

const NavBar = (props) => {
  return (
    <View style={styles.container}>
      <Button
        title="Back"
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
};

export default withNavigation(NavBar);
