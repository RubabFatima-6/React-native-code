
import React, { Component } from 'react';

import {
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';
import Student from './components/Student';

class App extends Component{
constructor(){
  super();
  this.state={
    name:"Rubab",
  }
}

updateName(){
this.setState({name:val})
}
 
render(){
return(
  <View>
    <Text style={{fontSize:30 , color:'red'}}>{this.state.name}</Text>
    <TextInput placeholder='Enter your name'
    
    onChangeText={(Text)=>this.updateName(Text)} 
      
    />
    <Button title='Press Me' />
    <Student name={this.state.name} />
  </View>
)
  }
}
  
export default App;