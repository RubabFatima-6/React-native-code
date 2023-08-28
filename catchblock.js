
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