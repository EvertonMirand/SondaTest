import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from '../pages/Feed';
import { FEED } from './RoutesContants';
import { TAB_BAR_COLOR } from '../utils/Colors';
import { screenPercentage } from '../utils/DeviceDimension';

const Tab = createBottomTabNavigator();

const SCREEN_10_PERCENT = screenPercentage(10);

const TabRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelPosition: 'below-icon',
        activeTintColor: TAB_BAR_COLOR,
        labelStyle: {
          fontFamily: 'Poppins-Regular',
          fontSize: SCREEN_10_PERCENT * 0.17,
        },
        inactiveTintColor: '#B7B7CC',
        style: {
          height: SCREEN_10_PERCENT,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              size={SCREEN_10_PERCENT * 0.8}
              name="rss-feed"
              color={color}
            />
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
