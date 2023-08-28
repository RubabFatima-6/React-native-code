
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, Modal, TextInput } from 'react-native';

const App = () => {

    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(undefined);

    const getAPIData = async () => {
        const url = "http://192.168.1.13:3000/users";
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result)
        }
    }

    const deleteUser = async (id) => {
        const url = "http://192.168.1.13:3000/users/4";
        let result = await fetch('${url}/${id}', {
            method: "delete"
        });
        result = await result.json();
        if (result) {
            console.warn("User Deleted");
            getAPIData();
        }
    }

    useEffect(() => {
        getAPIData();
    }, [])

    const updateUser = (data) => {
        setShowModal(true)
        setSelectedUser(data)
    }

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
                    <View style={{ flex: 1 }}><Button title='Delete' onPress={() => deleteUser(item.id)} /></View>
                    <View style={{ flex: 1 }}><Button title='Update' onPress={() => updateUser(item)} /></View>
                </View>)
                : null
            }
            <Modal visible={showModal} transparent={true}>
                <UserModal setShowModal={setShowModal} selectedUser={selectedUser} />
            </Modal>
        </View>
    );
};

const UserModal = (props) => {
    console.warn(props.selectedUser);

    const [name, setName] = useState(undefined);
    const [age, setAge] = useState(undefined);
    const [email, setEmail] = useState(undefined);

    useEffect(() => {
        if (props.selectedUser) {
            setName(props.selectedUser.name);
            setAge(props.selectedUser.age.toString());
            setEmail(props.selectedUser.email);
        }
    }, [props.selectedUser])

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>

                <TextInput style={styles.input} value={name} />
                <TextInput style={styles.input} value={age} />
                <TextInput style={styles.input} value={email} />
                <View style={{ marginBottom: 15 }}><Button title='Update' /></View>
                <Button title='Close' onPress={() => props.setShowModal(false)} />
            </View>
        </View>
    )
}

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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.70,
        elevation: 5
    },
    input: {
        borderWidth: 1,
        borderColor: 'purple',
        width: 300,
        marginBottom: 15,
        fontSize: 20
    }
})

export default App;