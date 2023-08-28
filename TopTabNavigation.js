
import React, { useState } from 'react';

import { View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const App = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator>

                <Tab.Screen name='Login' component={Login} />
                <Tab.Screen name='SignUp' component={SignUp} />
                <Tab.Screen name='Other' component={SignUp} />

            </Tab.Navigator>
        </NavigationContainer>
    );
};

const Login = () => {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 35, color: 'purple' }}>Login</Text>
    </View>
}

const SignUp = () => {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 35, color: 'purple' }}>SignUp</Text>
    </View>
}

export default App;