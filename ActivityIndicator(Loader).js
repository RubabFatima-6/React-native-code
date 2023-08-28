
import React, { useState } from 'react';

import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  const [show, setShow] = useState(false);
  const displayLoader = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false)
    }, 3000)


  }

  return (
    <View style={styles.main}>
      {/*<ActivityIndicator size={200} color={"purple"} />*/}
      {/*<ActivityIndicator size={100} color={"red"} />*/}


      {/*<ActivityIndicator size={200} color={"purple"} animating={show} />*/}
      {
        show ? <ActivityIndicator size={100} color={"gold"} /> : null
      }
      <Button title='show loader' onPress={displayLoader} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;