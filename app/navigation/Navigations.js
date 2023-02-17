import React, {useState} from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import { WebView } from 'react-native-webview';


function Navigations(props) {

    const [result, setResult] = useState(null);

    const _handlePressButtonAsync = async () => {
      let result = await WebBrowser.openBrowserAsync('https://cellsflux.com/Appdorcas/public/');
      setResult(result);
    };


    return (
      <View style={styles.container1}>
      <WebView
      style={styles.container}
      source={{ uri: 'https://cellsflux.com/Appdorcas/public/' }}
    />
    </View>
    );
}




const styles = StyleSheet.create({
  container1:{
    paddingTop: 40, 
    flex: 1
  },
    container: {
    
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
    },Button:{
        height: 50,
        borderRadius: 50,
        backgroundColor:"#5CABE8",
        justifyContent:'center',
        alignContent:'center',
        padding: 10
        
    },text:{
          fontSize: 20,
          fontWeight: 'bold',
          color:"#F0F3F5"
    }
  });

export default Navigations;
