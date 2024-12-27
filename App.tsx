import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Image,
} from 'react-native';


function App(){
  const isLightMode = useColorScheme() === 'light';

  return(
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.container}>
        <Text style={isLightMode ? styles.textBlack : styles.textWhite}>Hello World</Text>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
          style={{width: 150, height: 200}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    parentContainer : {
      flex : 0,
      alignItems : 'center',
      height : 570,
      width : 360,
      borderWidth: 10,
      borderColor : 'rgb(0, 0, 255)',
    },
    container : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
      height : 300,
      width : 310,
      borderWidth: 5,
      borderColor : 'rgb(255, 0, 255)',
    },
    textWhite : {
      color : '#ffffff',
    },
    textBlack : {
      color : '#000000',
    },
});

export default App;
