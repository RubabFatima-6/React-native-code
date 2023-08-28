
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';

const App = () => {

    const [data, setData] = useState({})

    const getAPIData = async () => {
        const url = "http://192.168.1.13:3000/users";
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result)
        }
    }

    useEffect(() => {
        getAPIData();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.dataWrapper}>
                <View style={{ flex: 2 }}><Text> Name</Text></View>
                <View style={{ flex: 4 }}><Text> Age</Text></View>
                <View style={{ flex: 3 }}><Text>Operations</Text></View>
            </View>

            {data.length ?
                data.map((item) => <View style={styles.dataWrapper}>
                    <View style={{ flex: 1 }}><Text> {item.name}</Text></View>
                    <View style={{ flex: 1 }}><Text> {item.age}</Text></View>
                    <View style={{ flex: 1 }}><Button title='Delete' /></View>
                    <View style={{ flex: 1 }}><Button title='Update' /></View>
                </View>)
                : null
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    dataWrapper: {
        padding: 7,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#ffdab9',
        margin: 5,
        alignItems: 'center'
    }
})

export default App;