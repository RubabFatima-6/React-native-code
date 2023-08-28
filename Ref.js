
import React, { useRef } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';

const App = () => {

    const input = useRef();
    const updateInput = () => {
        console.warn("call");
        input.current.focus();
        input.current.setNativeProps({
            fontSize: 25,
            color: 'green'
        })
    }

    return (
        <View style={styles.container}>
            <TextInput ref={input} style={styles.input} placeholder='Enter Name' />
            <TextInput style={styles.input} placeholder='Enter Password' />

            <Button title='Update Input' onPress={updateInput} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    input: {
        borderColor: 'purple',
        borderWidth: 2,
        margin: 10
    }
})

export default App;