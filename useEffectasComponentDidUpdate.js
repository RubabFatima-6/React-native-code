
import React, { useEffect, useState } from 'react';

import {
  Button,
  Text,
  View,
} from 'react-native';

const App = () => {

  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  useEffect(() => {
    console.warn("do some animation");
  }, [count]);


  useEffect(() => {
    console.warn("call some api here");
  }, [data]);

  return (
    <View>
      <Text style={{ fontSize: 30 }}>useEffect as ComponentDidUpdate {count}</Text>

      <Button title='Update Counter' onPress={() => setCount(count + 1)} />
      <Button title='Update Data' onPress={() => setData(data + 1)} />
      <User info={{ data, count }} />
    </View>
  )
}

const User = (props) => {
  console.warn(props.info)

  useEffect(() => {
   console.warn("run this code when data prop is updated");
  },[props.info.data])

  useEffect(() => {
    console.warn("run this code when count prop is updated");
   },[props.info.count])

  return (
    <View>
      <Text style={{ fontSize: 30, color: 'green' }} >User Component</Text>
    </View>
  )
}

export default App;