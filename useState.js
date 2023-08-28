
import React, { useState } from 'react';

import {
  Button,
  Text,
  View,
} from 'react-native';

const App=()=>{

const [name,setName]=useState("Rubab");
let data="Peter"; 

function testName(){
  setName("Fatima")
  data="Sam";
}  

  return (
    <View>
      <Text style={{ fontSize: 30 }}>{name}</Text>
      <Text style={{ fontSize: 30 }}>{data}</Text>

      <Button title='Update Name' onPress={testName} />
    </View>
  );
};


export default App;