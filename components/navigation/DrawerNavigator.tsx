import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import DashboardScreen from '@/app/screens/dashboard';
import CoursesScreen from '@/app/screens/courses';
import ProgressScreen from '@/app/screens/progress';
import ProfileScreen from '@/app/screens/profile';

// Usar o drawer sem gestos complexos
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary.yellow,
        },
        headerTintColor: Colors.primary.white,
        drawerActiveTintColor: Colors.primary.yellow,
        drawerInactiveTintColor: Colors.primary.gray,
        drawerStyle: {
          backgroundColor: Colors.primary.white,
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '500',
        },
        // Desabilitar gestos complexos que dependem do Reanimated
        swipeEnabled: false,
      }}
    >
      <Drawer.Screen 
        name="Dashboard" 
        component={DashboardScreen}
        options={{
          title: 'Início',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Courses" 
        component={CoursesScreen}
        options={{
          title: 'Cursos',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Progress" 
        component={ProgressScreen}
        options={{
          title: 'Meu Progresso',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bar-chart" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          title: 'Meu Perfil',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}