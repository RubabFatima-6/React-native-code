
import React from 'react';

import {
  SectionList,
  Text,
  View,
} from 'react-native';

const App = () => {

  const users = [
    {
      id: 1,
      name: 'Rubab',
      data: ["PHP,React js,Angular"]
    },
    {
      id: 2,
      name: 'Fatima',
      data: ["Java,JS,HTML"]
    },
    {
      id: 3,
      name: "Anabia",
      data: ["C,C++,Python"]
    },
    {
      id: 4,
      name: 'Peter',
      data: ["CSS,Bootstrap,HTML"]
    }
  ]

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Section List in React Native</Text>
      <SectionList
        sections={users}
        renderItem={(item) => <Text style={{ fontSize: 20, marginLeft: 25 }}>{item}</Text>}
        renderSectionHeader={({ section: { name } }) => {
          <Text style={{ fontSize: 25, color: 'purple' }}>{name}</Text>
        }}
      />
    </View>
  );
};

const UserData = () => {
  const item = props.item;
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