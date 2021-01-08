import React from 'react';
import { StatusBar } from 'expo-status-bar';




import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const submitted=()=>{
    window.alert("Already submitted");
  }
  
  export default function Signup() {
    return (
      <View style={styles.container}>
        {/* <Text>Nandani</Text> */}
       <View style={{padding:50}}>
  
         {/* <Text>Log In</Text> */}
         <h1 style={{justifyContent:'center', display:'flex'}}>Create Your Account</h1>
         <TextInput style={styles.textArea }
        label="Name"
      />
        <TextInput style={styles.textArea }
        label="Email"
      />
    
       <TextInput style={styles.textArea}
        label="Password"
      />
       <TextInput style={styles.textArea}
        label="Phone no"
      />

    <Button mode="contained" onPress={()=>submitted()} style={{width:200, alignSelf:'center',backgroundColor:'orange'}}>
      Sign Up
    </Button>
    <text style={{justifyContent:'center', display:'flex', marginTop:300}}>
      By signing up you agree to our Terms of Use and Privacy Policy
    </text>
    
      </View>
    
        <StatusBar style="auto" />
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