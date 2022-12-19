import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'; 

import { Home } from './pages/Home';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';

import { AntDesign } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}  options={{
            tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color="black" /> ,
            title: 'Home',
        }}/>
        
        <Tab.Screen name="tecnico" component={Page1} options={{
            tabBarIcon: ({ color }) => <FontAwesome5 name="school" size={24} color="black" /> ,
            title: 'Técnico',
        }} />

        <Tab.Screen name="superior" component={Page2} options={{
            tabBarIcon: ({ color }) => <FontAwesome5 name="user-graduate" size={24} color="black" /> ,
            title: 'Superior',
        }} />
    </Tab.Navigator>
  );
}