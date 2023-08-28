
import React from 'react';

import {
  Button,
  Text,
  View,
} from 'react-native';

const App = () => {
  let data = 100;
  const fruit = (val) => {
    data = 50;
    console.warn(data)
  }

  return (
    <View>
      <Text style={{ fontSize: 30 }}>{data}</Text>
      <Button title='On Press' onPress={() => fruit("Hello Rubab")} color={'purple'} />
      <Button title='On Press 2' onPress={fruit} color={'pink'} />
    </View>
  );
};


export default App;