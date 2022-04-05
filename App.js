
import React from 'react';
import Welcome from './src/views/welcome';
import CommitsList from './src/components/commits-list';
import CommitDetail from "./src/components/commit-detail";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" options={{title:"Home"}} component={Welcome} />
        <Stack.Screen name="Commits" options={{title:"Commits List"}} component={CommitsList} />
        <Stack.Screen name="CommitDetail" options={{title:"Commit Detail"}} component={CommitDetail} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}