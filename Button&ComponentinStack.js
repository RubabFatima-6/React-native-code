
import React, { useState } from 'react';

import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
    </View>
  )
}

const Login = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Login Screen</Text>
      <Button title='Go To Home Page' onPress={() => props.navigation.navigate("Home")} />
    </View>
  )
}

export default App;