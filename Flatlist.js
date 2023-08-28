
import React from 'react';

import {
  FlatList,
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
    }
  ]

  return (
    <View>
      <Text style={{ fontSize: 30 }}>List with Flat List Components</Text>
      <FlatList
        data={users}
        renderItem={( {item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item=>item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
 item:{
  fontSize:25,
  padding:10,
  color:'purple',
  backgroundColor:'pink',
  borderEndColor:'black',
  borderWidth:2,
  margin:10
 }
})

export default App;