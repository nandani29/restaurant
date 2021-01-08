import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
// import { Actions } from 'react-native-router-flux';

const submitted=()=>{
    window.alert("Already submitted");
  }
  
  export default function Login() {
   
    return (
      <View style={styles.container}>
        {/* <Text>Nandani</Text> */}
       <View style={{padding:50}}>
  
         {/* <Text>Log In</Text> */}
         <h1 style={{justifyContent:'center', display:'flex'}}>Log In</h1>
        <TextInput style={styles.textArea }
        label="Username"
      />
    
       <TextInput style={styles.textArea}
        label="Password"
      />
        
         <TextInput style={styles.textArea}
        label="Confirm Password"
      />
        
            <TextInput style={styles.textArea}
        label="Mobile No"
      />
    <Button mode="contained" onPress={()=>submitted()} style={{width:200, alignSelf:'center',backgroundColor:'orange'}}>
      Log In
    </Button>
    <text style={{justifyContent:'center', display:'flex', marginTop:300}}>
      Don't have an account? <a onPress={()=>navigateToList()}>SignUp</a>
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
