
import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';

const App = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');

    const saveData = async () => {
        console.warn(name);
        console.warn(age);
        console.warn(email);
        const url = "http://192.168.100.6:3000/users";
        let result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, age })
        });
        result = await result.json();
        if (result) {
            console.warn("Data Added")
        }
    }
    return (
        <View>
            <Text style={{ fontSize: 25, color: 'black' }}>Post API with input field data</Text>
            <TextInput style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder='Enter Name' />

            <TextInput style={styles.input}
                value={age}
                onChangeText={(text) => setAge(text)}
                placeholder='Enter Age' />

            <TextInput style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder='Enter Email' />

            <Button title='Save Data' onPress={saveData} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: 'purple',
        margin: 20,
        fontSize: 20
    }
})

export default App;