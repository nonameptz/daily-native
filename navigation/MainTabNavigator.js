import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import DogsScreen from '../screens/DogsScreen';
import LinksScreen from '../screens/LinksScreen';
import CatsScreen from '../screens/CatsScreen';

const DogsStack = createStackNavigator({
  Dogs: DogsScreen,
});

DogsStack.navigationOptions = {
  tabBarLabel: 'Dogs',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-paw'
          : 'md-paw'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  title: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const CatsStack = createStackNavigator({
  Cats: CatsScreen,
});

CatsStack.navigationOptions = {
  tabBarLabel: 'Cats',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-paw-outline' : 'md-paw'}
    />
  ),
};

export default createBottomTabNavigator(
  {
    DogsStack,
    LinksStack,
    CatsStack,
  }, {
    navigationOptions: ({navigation}) => ({
      tabBarOptions: {
        activeTintColor: Colors.defaultTextColor,
        inactiveTintColor: Colors.defaultLinkTextColor,
        activeBackgroundColor: Colors.defaultLinkTextColor,
        inactiveBackgroundColor: Colors.backgroundColorDefault,
        style: {
          borderTopWidth: 0,
          backgroundColor: Colors.backgroundColorDefault
        },
        tabStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }
      },
    })
  }
);
