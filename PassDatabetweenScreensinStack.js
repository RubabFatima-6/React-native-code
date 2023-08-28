
import React, { useState } from 'react';

import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './components/Home';
import { Login } from './components/Login';

const stack = createNativeStackNavigator();

const App = () => {

  const btnAction = () => {
    console.warn("btn pressed");
  }

  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f08080',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 30
          }
        }}>

        <stack.Screen name='Login' component={Login}
          options={{
            headerTitle: () => <Button onPress={btnAction} title='left' />,
            headerRight: () => <Header />,
            title: "User Login",
            headerStyle: {
              backgroundColor: '#f08080',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 30
            }
          }}
        />

        <stack.Screen name='Home' component={Home} />

      </stack.Navigator>
    </NavigationContainer>
  );
};

const Header = () => {
  return (
    <Button title='btn' />
  )
}

export default App;