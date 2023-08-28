
import React, { useState } from 'react';

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);

  const resetFormData=()=>{
    setDisplay(false);
    setEmail("");
    setName("");
    setPassword("");
  }

  return (
    <View>

      <Text style={{ fontSize: 30 }}>Simple Form in React Native</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Enter User Name'
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Enter User Password'
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Enter User Email'
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <View style={{ marginBottom: 10 }}>
        <Button color={"green"} 
        title='Print Details' 
        onPress={()=>setDisplay(true)}/>
      </View>
      <Button title='Clear Details' onPress={resetFormData} />
      <View>
        {
          display ?
            <View>
              <Text style={{ fontSize: 15 }}>User Name is:{name}</Text>
              <Text style={{ fontSize: 15 }}>User Password is:{password}</Text>
              <Text style={{ fontSize: 15 }}>User Email is:{email}</Text>
            </View> : null
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: 'purple',
    fontSize: 18,
    margin: 10,
    borderColor: 'pink',
    borderWidth: 2
  }
})

export default App;