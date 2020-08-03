import React from 'react';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from '../pages/Feed';
import { FEED, CAMERA } from './RoutesContants';
import { TAB_BAR_COLOR } from '../utils/Colors';
import Camera from '../pages/Camera';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelPosition: 'below-icon',
        activeTintColor: TAB_BAR_COLOR,
        labelStyle: {
          fontFamily: 'Poppins-Regular',
          fontSize: 13,
        },
        inactiveTintColor: '#B7B7CC',
        style: {
          height: 120,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MIcons size={70} name="rss-feed" color={color} />
          ),
          title: 'Feed de imagens',
        }}
        name={FEED}
        component={Feed}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FAIcons size={70} name="camera" color={color} />
          ),
          title: 'Camera',
          tabBarVisible: false,
        }}
        name={CAMERA}
        component={Camera}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
