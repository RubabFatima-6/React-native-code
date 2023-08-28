
import React from 'react';

import {
  FlatList,
  ScrollView,
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
      <Text style={{ fontSize: 30 }}>List with map function</Text>
      <ScrollView style={{marginBottom:50}}>
        {
          users.map((item) => <Text style={styles.item}>{item.name}</Text>)
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    padding: 10,
    color: 'purple',
    backgroundColor: 'pink',
    borderEndColor: 'black',
    borderWidth: 2,
    margin: 10
  }
})

export default App;