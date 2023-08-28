
import React from 'react';

import {
  StyleSheet,
  FlatList,
  Text,
  View,
} from 'react-native';

const App = () => {

  const users = [
    {
      id: 1,
      name: "Rubab",
      email: "abc@test.com"
    },
    {
      id: 2,
      name: "Fatima",
      email: "abc@test.com"
    },
    {
      id: 3,
      name: "Anabia",
      email: "abc@test.com"
    }
  ]

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Component in loop with flatlist</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserData item={item}/>}
      />
    </View>
  );
};

const UserData = () => {
  const item=props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    color: 'purple',
    flex: 1,
    margin: 2,
    textAlign: 'center'
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10
  }
})

export default App;