
import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

const App = () => {

  return (
    <View style={styles.main}>

      <View style={styles.box1}>
        <View style={Innerbox1}></View>
        <View style={Innerbox2}></View>
        <View style={Innerbox3}></View>
      </View>

      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  box1: {
    flex: 2,
    backgroundColor: 'red'
  },
  box2: {
    flex: 1,
    backgroundColor: 'green'
  },
  box3: {
    flex: 1,
    backgroundColor: 'blue'
  },
  Innerbox1: {
    flex: 1,
    backgroundColor: 'skyblue',
    margin: 10
  },
  Innerbox2: {
    flex: 1,
    backgroundColor: 'yellow',
    margin: 10
  },
  Innerbox3: {
    flex: 1,
    backgroundColor: 'pink',
    margin: 10
  }
})

export default App;