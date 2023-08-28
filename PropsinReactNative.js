
import React, { useState } from 'react';

import {
    Button,
    Text,
    View,
} from 'react-native';

const App = () => {

    const [name, setName] = useState("Rubab")

    return (
        <View>
            <Text style={{ fontSize: 30 }}>Props in React js</Text>
            <Button title='Update Props' onPress={() => setName("Anabia")} />
            <User name={name} age={19} />
        </View>
    );
};

const User = (props) => {
    return (
        <View style={{ backgroundColor: 'yellow', padding: 5 }}>
            <Text style={{ fontSize: 30, color: 'red' }}>{props.name}</Text>
            <Text style={{ fontSize: 30, color: 'red' }}>{props.age}</Text>
        </View>
    );
}

export default App;