
import React from 'react';

import {
  Button,
  Text,
  View,
} from 'react-native';

let age = 19;
var email = "abc@test.com";

function fruit() {
  return "apple";
}

const App = () => {
  const name = "Rubab";
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{name}</Text>
      <Text style={{ fontSize: 30 }}>{age}</Text>
      <Text style={{ fontSize: 30 }}>{email}</Text>
      <Text style={{ fontSize: 30 }}>{fruit}</Text>
      <Text style={{ fontSize: 30 }}>{100 * 20}</Text>
      <Text style={{ fontSize: 30 }}>{age === 19 ? "above 15" : "Unknown age"}</Text>
    </View>
  );
};


export default App;