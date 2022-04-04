
import React from 'react';
import Welcome from './src/views/welcome';
import CommitsList from './src/components/commits-list';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Commits" component={CommitsList} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}