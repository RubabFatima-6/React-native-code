import React, { Component } from 'react';

import {
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';

class Student extends Component {

render(){
    
  return(
    <View>
     <Text style={{fontSize:30,color:'#40e0d0'}}>Student name:{this.props.name}</Text>
    </View>
  )
}

}

export default Student; 