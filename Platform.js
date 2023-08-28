
import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';

const App = () => {

  return (
    <View>
      <Text style={{ fontSize: 30 , color:'black' }}> Platform : {Platform.OS}</Text>
      {
        Platform.OS == "android" ?
          <View style={{ backgroundColor: 'green', height: 100, width: 100 }}></View>
          :
          <View style={{ backgroundColor: 'purple', height: 100, width: 100 }}></View>
      }
      <Text style={styles.text}>Hello</Text>
      <Text style={{ fontSize: 20 , color:'black'}}>{JSON.stringify(Platform)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: Platform.OS == "android" ? "#dc143c" : 'lightblue',
    fontSize: 25
  }
})

export default App;