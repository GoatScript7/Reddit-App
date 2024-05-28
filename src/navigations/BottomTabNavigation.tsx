import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CommunitiesScreen from '../screens/CommunitiesScreen';
import CreateScreen from '../screens/CreateScreen';
import ChatScreen from '../screens/ChatScreen';
import InboxScreen from '../screens/InboxScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#fff'},
      }}>
      <Tab.Screen
        name="DrawerHome"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? '#000' : '#676767'}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#000' : '#676767', fontSize: 10}}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Communities"
        component={CommunitiesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="people-circle-outline"
              size={24}
              color={focused ? '#000' : '#676767'}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#000' : '#676767', fontSize: 10}}>
              Communities
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="plus"
              size={24}
              color={focused ? '#000' : '#676767'}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#000' : '#676767', fontSize: 10}}>
              Create
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={
                focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'
              }
              size={24}
              color={focused ? '#000' : '#676767'}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#000' : '#676767', fontSize: 10}}>
              Chat
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name={focused ? 'bell' : 'bell-o'}
              size={24}
              color={focused ? '#000' : '#676767'}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#000' : '#676767', fontSize: 10}}>
              Chat
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
