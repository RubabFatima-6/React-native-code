
import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {

  const skills = [
    {
      id: 1,
      name: "JAVA"
    },
    {
      id: 2,
      name: "PHP"
    },
    {
      id: 3,
      name: "Node"
    },
    {
      id: 4,
      name: "SQL"
    }
  ]

  const [selectedRadio, setSelectedRadio] = useState(1)

  return (
    <View style={styles.main}>
      {
        skills.map((item,index) => <TouchableOpacity 
        key={index}
        onPress={() => setSelectedRadio(item.id )}>
          <View style={styles.wrapper}>
            <View style={styles.radio}>
              {selectedRadio == item.id? <View style={styles.radioBg}></View> : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioText: {
    fontSize: 30,
    color:'black'
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'purple',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10
  },
  radioBg: {
    backgroundColor: 'pink',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default App;