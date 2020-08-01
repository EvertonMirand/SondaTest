import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Album from '../pages/Album';
import Login from '../pages/Login';

import { BACKGROUND } from '../utils/Colors';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <App.Navigator initialRouteName="Login">
        <App.Screen
          options={{
            headerShown: false,
            cardStyle: {
              backgroundColor: BACKGROUND,
            },
          }}
          name="Login"
          component={Login}
        />
        <App.Screen
          options={{
            headerShown: false,
            cardStyle: {
              backgroundColor: BACKGROUND,
            },
          }}
          name="Album"
          component={Album}
        />
      </App.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
