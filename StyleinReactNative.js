
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ExStyles from './style'
 
const App = () => {

  return (
    <View>

      <Text style={{ fontSize: 30, color: 'red', backgroundColor: 'lightblue' }}>Style in React Native</Text>

      <Text style={styles.textbox}>Style in React Native</Text>
      <Text style={styles.textbox}>Style in React Native</Text>
      <Text style={styles.textbox}>Style in React Native</Text>

      <Text style={ExStyles.textbox}>Style in React Native</Text>
      <Text style={[styles.textbox,ExStyles.textbox]}>Style in React Native</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  textbox: {
    color: '#fff',
    fontSize: 30,
    backgroundColor: 'lightblue',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderColor: 'red',
    borderWidth: 2
  }
})

export default App;