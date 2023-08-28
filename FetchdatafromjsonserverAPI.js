
import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';

const App = () => {
  const [data, setData] = useState([])
  const getAPIData = async () => {
    const url = "http://168.192.100.5:3000/users";
    let result = await fetch(url);
    result = await result.json();
    setData(result)
  }
  useEffect(() => {
    getAPIData()
  }, [])

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Call json server API</Text>
      {
        data ?
          data.map((item) => <View style={{borderColor:'orange',borderWidth:1}}>
            <Text style={{ fontSize: 30 }}>{item.name}</Text>
            <Text style={{ fontSize: 30 }}>{item.age}</Text>
            <Text style={{ fontSize: 30 }}>{item.email}</Text>
          </View>)
          : null
      }
    </View>
  );
};

export default App;
