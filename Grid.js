
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  const users = [
    {
      id: 1,
      name: "Rubab"
    },
    {
      id: 2,
      name: "Fatima"
    },
    {
      id: 3,
      name: "Anabia"
    },
    {
      id: 4,
      name: "Elsa"
    },
    {
      id: 5,
      name: "Sam"
    },
    {
      id: 6,
      name: "Peter"
    },
    {
      id: 7,
      name: "Anna"
    },
    {
      id: 8,
      name: "Tony"
    },
    {
      id: 9,
      name: "Bruce"
    },
    {
      id: 10,
      name: "Ali"
    }
  ]

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Grid with Dynamic Data</Text>
    {
      users.map((item)=><Text style={styles.item}>{}item.name</Text>)
    }
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    padding: 5,
    color: 'purple',
    backgroundColor: 'pink',
    width:120,
    height:120,
    textAlignVertical:'center',
    textAlign:'center',
    margin: 5
  }
})

export default App;