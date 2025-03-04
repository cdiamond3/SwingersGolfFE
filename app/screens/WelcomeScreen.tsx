import React from 'react';
import { Button, ImageBackground, StyleSheet, ViewStyle, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function WelcomeScreen(): JSX.Element {
  const navigation = useNavigation<any>();

  return (
    <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Username'/>
        <TextInput style={styles.input} placeholder='Password'/>
        <View style={styles.button}>
            <Button title="Login" onPress={() => navigation.navigate('Landing')} />
        </View>
        <View style={styles.button}>
            <Button title="Create Account" onPress={() => navigation.navigate('Landing')} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  } as ViewStyle,
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: '80%',
  },
  button: {
    width:'80%',marginTop: 20
  }
});

export default WelcomeScreen;