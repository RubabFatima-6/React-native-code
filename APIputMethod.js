
import React from "react";
import { View, Text } from "react-native";

const App = () => {

    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(undefined);

    const getAPIData = async () => {
        try {
            const url = "http://192.168.100.5:3000/users";
            let result = await fetch(url);
            result = await result.json();
            if (result) {
                setData(result);
            }
        } catch (error) {
            console.log('Error occurred during API request:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const url = "http://192.168.100.5:3000/users";
            let result = await fetch(`${url}/${id}`, {
                method: "delete",
            });
            result = await result.json();
            if (result) {
                console.warn("User Deleted");
                getAPIData();
            }
        } catch (error) {
            console.log('Error occurred during API request:', error);
        }
    };

    useEffect(() => {
        getAPIData();
    }, []);

    const updateUser = (data) => {
        setShowModal(true);
        setSelectedUser(data);
    };

    return (
        <View style={styles.container}>
            <View style={styles.dataWrapper}>
                <View style={{ flex: 2 }}><Text> Name</Text></View>
                <View style={{ flex: 4 }}><Text> Age</Text></View>
                <View style={{ flex: 3 }}><Text>Operations</Text></View>
            </View>

            {data.length ?
                data.map((item) => (
                    <View style={styles.dataWrapper} key={item.id}>
                        <View style={{ flex: 1 }}><Text>{item.name}</Text></View>
                        <View style={{ flex: 1 }}><Text>{item.age}</Text></View>
                        <View style={{ flex: 1 }}><Button title='Delete' onPress={() => deleteUser(item.id)} /></View>
                        <View style={{ flex: 1 }}><Button title='Update' onPress={() => updateUser(item)} /></View>
                    </View>
                ))
                : null
            }

            <Modal visible={showModal} transparent={true}>
                <UserModal setShowModal={setShowModal} selectedUser={selectedUser} getAPIData={getAPIData} />
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
    }, [props.selectedUser]);

    const updateUser = async () => {
        console.warn(name, age, email, props.selectedUser.id);
        try {
            const url = "http://192.168.1.13:3000/users";
            const id = props.selectedUser.id;

            let result = await fetch(`${url}/${id}`, {
                method: "put",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, age, email })
            });
            result = await result.json();


            const styles = StyleSheet.create({
                container: {
                    flex: 1,
                },
                dataWrapper: {
                    padding: 7,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    backgroundColor: '#ffdab9',
                    margin: 5,
                    alignItems: 'center',
                },
            });

            export default App;