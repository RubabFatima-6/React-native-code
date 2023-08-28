
import React, { useEffect, useState } from 'react';

import {
  Button,
  Text,
  View,
} from 'react-native';

const App =()=>{

  const [count,setCount]=useState(0);
  useEffect=(()=>{
    console.warn("Hello")
  },[])

  return(
    <View>
      <Text style={{fontSize:30}}>Life Cycle with Use Effect {count}</Text>
      <Button title='Update Count' onPress={()=>setCount(count+1)}/>
    </View>
  )
}
