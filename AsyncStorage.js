
import React from 'react';
import { Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react';

const App = () => {
    const [user, setUser] = useState('');
    const setData = async () => {
        await AsyncStorage.setItem("user", "Rubab Fatima")
    }

    const getData = async () => {
        const name = await AsyncStorage.getItem("user");
        setUser(name);
    }

    const removeData = async () => {
        await AsyncStorage.removeItem("user");
        setUser('');
    }

    return (
        <View style={{ marginTop: 100, marginLeft: 20 }}>
            <Text style={{ fontSize: 40, color: 'black' }}>Async Storage with react native | {user}</Text>
            <Button title='Set Data' onPress={setData} />
            <Button title='Get Data' onPress={getData} />
            <Button title='Remove Data' onPress={removeData} />
        </View>
    );
};

export default App;