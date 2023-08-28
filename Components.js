
import React from 'react';

import {
  Button,
  Text,
  View,
} from 'react-native';

import CompanyData from './components/CompanyData';

const App = () => {

  return (
    <View>
      <CompanyData />
      <Text style={{ fontSize: 30 }}>Components</Text>
      <UserData />
    </View>
  );
};

const UserData = () => {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Name : Rubab</Text>
      <Text style={{ fontSize: 20 }}>Age : 19</Text>
      <Text style={{ fontSize: 20 }}>Email : abc@test.com</Text>
    </View>
  )

}


export default App;