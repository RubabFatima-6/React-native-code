
import React, { useState } from 'react';

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {

  const [name, setName] = useState("");

  return (
    <View>

      <Text style={{ fontSize: 30 }}>Handle Text Input</Text>
      <Text style={{ fontSize: 30 }}>Your name is:{name}</Text>

      <TextInput
        style={styles.textInput}
        placeholder='Enter Your Name'
        value={name}
        onChangeText={(text)=>setName(text)}
      />
      <Button title='Clear Input Value' onPress={()=>setName('')} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: 'purple',
    fontSize: 18,
    margin: 10,
    borderColor: 'pink',
    borderWidth: 2
  }
})

export default App;