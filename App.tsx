import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LandingScreen from './app/screens/LandingScreen';
import store from './app/store';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Swingers Golf">
          <Stack.Screen name="Swingers Golf" component={WelcomeScreen} />
          <Stack.Screen name="Landing" component={LandingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;