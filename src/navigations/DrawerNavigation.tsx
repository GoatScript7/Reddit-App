import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';

const LeftDrawer = createDrawerNavigator();

const LeftDrawerScreen = () => {
  return (
    <LeftDrawer.Navigator
      id="LeftDrawer"
      screenOptions={{drawerPosition: 'left', headerShown: false}}>
      <LeftDrawer.Screen name="Home" component={BottomTabNavigation} />
    </LeftDrawer.Navigator>
  );
};

const RightDrawer = createDrawerNavigator();

const RightDrawerScreen = () => {
  return (
    <RightDrawer.Navigator
      id="RightDrawer"
      screenOptions={{drawerPosition: 'right', headerShown: false}}>
      <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
    </RightDrawer.Navigator>
  );
};

const DrawerNavigation = () => {
  return <RightDrawerScreen />;
};

export default DrawerNavigation;
