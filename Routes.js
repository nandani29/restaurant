import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Login from './Login'
import  Signup from './Signup'



const AppStack = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: true }} >
    <AppStack name="Login" component={Home} />
    <AppStack name="Signup" component={List} />
    </AppStack.Navigator>

    </NavigationContainer>
    );
}