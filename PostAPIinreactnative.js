

import React from 'react';
import { Button, Text, View, } from 'react-native';

const App = () => {

  const saveAPIData = async () => {
    console.warn("test");
    const data = {
      name: "Anabia",
      age: 20,
      email: "anabia@test.com"
    }
    const url = "http://192.168.100.6:3000/users";
    let result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    result = await result.json();
    console.warn(result);
  }

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Post API Call</Text>
      <Button title='Save Data' onPress={saveAPIData} />
    </View>
  );
};

export default App;