import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from '../pages/Feed';
import { FEED } from './RoutesContants';
import { TAB_BAR_COLOR } from '../utils/Colors';

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
            <Icon size={70} name="rss-feed" color={color} />
          ),
          title: 'Feed de imagens',
        }}
        name={FEED}
        component={Feed}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
