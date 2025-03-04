import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function LandingScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Landing Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LandingScreen;