
import React from 'react';

import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';

const App = () => {

  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={styles.button} >Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.success]} >Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.highlights]} >Highlights</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.warning]} >Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.primary]} >Primary</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  button: {
    backgroundColor: 'grey',
    color: "#fff",
    fontSize: 25,
    textAlign:'center',
    padding:10,
    margin:10,
    borderRadius:10,
    shadowColor:'black',
    elevation:10,
    shadowOpacity:1
  },
  success:{backgroundColor:'green'},
  highlights:{backgroundColor:'red'},
  primary:{backgroundColor:'blue'},
  warning:{backgroundColor:'gold'}
})

export default App;