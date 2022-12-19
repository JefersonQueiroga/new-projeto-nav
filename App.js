import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView ,StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes2'; 

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Routes/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
