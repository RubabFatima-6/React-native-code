

import React, { useEffect, useState } from 'react';

import { View, Text, ScrollView } from 'react-native';

const App = () => {
    const [data, setData] = useState(undefined);

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
        <ScrollView>
            <Text style={{ fontSize: 30, color: 'black' }}> List with API Call</Text>
            {
                data ?
                    data.map((item) =>
                        <View style={{ padding: 10, borderBottomColor: '#afeeee', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 25, color: '#c71585', backgroundColor: '#ddd' }}>Id : {item.id}</Text>
                            <Text style={{ fontSize: 25, color: '#dda0dd' }}>Title : {item.title}</Text>
                            <Text style={{ fontSize: 25, color: '#808000' }}>Body : {item.body}</Text>
                        </View>
                    )
                    :
                    null
            }
        </ScrollView>
    );
};

export default App;