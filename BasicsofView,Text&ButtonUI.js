
import React from 'react';

import {
  Button,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Hello Text Component</Text>
      <Text style={{ fontSize: 20 }}>Hello Second Text Component</Text>
      <Button title='Press Here'></Button>
      <Text style={{ fontSize: 15 }}>Hello Third Text Component</Text>
      <Button title='Press Me Too'></Button>
    </View>
  );
};


export default App;