import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import DashboardScreen from '@/app/screens/dashboard';
import CoursesScreen from '@/app/screens/courses';
import ProgressScreen from '@/app/screens/progress';
import ProfileScreen from '@/app/screens/profile';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary.yellow,
        tabBarInactiveTintColor: Colors.secondary.grayMedium,
        tabBarStyle: {
          backgroundColor: Colors.primary.white,
          borderTopColor: Colors.secondary.grayBorder,
        },
        headerStyle: {
          backgroundColor: Colors.primary.yellow,
        },
        headerTintColor: Colors.primary.white,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={CoursesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}