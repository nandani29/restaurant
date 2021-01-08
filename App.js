import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Login from './components/Login';
import Signup from './components/Signup';




export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      <Signup/>
      {/* <Routes/> */}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textArea:{
    border:'none',
    // paddingBottom: 50,
    marginBottom:40
  }
});
