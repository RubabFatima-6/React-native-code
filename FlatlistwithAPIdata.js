
import React, { useEffect, useState } from 'react';

import { View, Text, FlatList } from 'react-native';

const App = () => {
    const [data, setData] = useState([]);

    const getAPIData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        let result = await fetch(url);
        result = await result.json();
        setData(result)
    }
    useEffect(() => {
        getAPIData();
    }, [])

    return (
        <View>
            <Text style={{ fontSize: 30, color: 'black' }}>Flatlist with API Data</Text>
            {
                data.length ?
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <View style={{ borderBottomColor: 'orange', padding: 10, borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 25, color: '#800000', backgroundColor: '#ffd700' }}> {item.id}</Text>
                            <Text style={{ fontSize: 20, color: '#ffa07a' }}>{item.title}</Text>
                            <Text style={{ fontSize: 20, color: '#8fbc8f' }}>{item.body}</Text>
                        </View>}
                    />
                    : null
            }
        </View>
    );
};

export default App;