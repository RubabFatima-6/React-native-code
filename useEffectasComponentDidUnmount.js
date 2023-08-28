
import React, { useEffect, useState } from 'react';

import {
  Button,
  Text,
  View,
} from 'react-native';
import Student from './components/Student';

const App = () => {

  const [show, setShow] = useState(true);

  return (
    <View>
      <Text style={{ fontSize: 30 }}>useEffect for unmount Component</Text>
      <Button title='Toggle' onPress={() => setShow(!show)} />
      {
        show ? <Student /> : null
      }
    </View>
  )
}

const student = () => {

  let time = setInterval(() => {
    console.warn("Timer Called");
  }, 2000);

  useEffect(() => {
    return () => clearInterval(timer)
  })
  return (
    <View>
      <Text style={{ fontSize: 30, color: 'green' }} >Student</Text>
    </View>
  )
}

export default App;import React, { useEffect, useState } from 'react';
