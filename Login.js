
import React, { useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';

export const Login = (props) => {

  const [name, setName] = useState("");
  const age = 19;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Login Screen</Text>
      <TextInput
        style={{ fontSize: 25, borderColor: '#db7093', borderWidth: 2 }}
        onChangeText={(Text) => setName(Text)} placeholder="Enter name" />
      <Button title='Go To Home Screen'
        onPress={() => props.navigation.navigate("Home", { name, age })} />
    </View>
  )
}