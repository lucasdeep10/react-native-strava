import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import ActivitiesScreen from '../screens/ActivitiesScreen';

// Define los nombres de las rutas y sus parámetros
export type RootStackParamList = {
  Auth: undefined; // Sin parámetros
  Activities: undefined; // Sin parámetros
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen 
          name="Auth" 
          component={AuthScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Activities" 
          component={ActivitiesScreen} 
          options={{ headerTitle: 'Your Activities' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
