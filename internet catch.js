
fetch('http://192.168.100.5:3000/users', {
    method: 'DELETE',
})
    .then(result => {
        if (result.ok) {
            console.log('Internet connection is available.');
        } else {
            console.log('Internet connection is not available.');
        }
    })
    .catch(error => {
        console.log('Error occurred:', error);
    });