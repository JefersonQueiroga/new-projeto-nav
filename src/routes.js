import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './pages/Home';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{ headerShown: false  }}  />
      <Stack.Screen name="page1" component={Page1} options={{ title: 'Curso Técnicos', headerTitleAlign: 'center'}} />
      <Stack.Screen name="page2" component={Page2} options={{ title: 'Cursos Superiores', headerTitleAlign: 'center'}} />
    </Stack.Navigator>
  );
}