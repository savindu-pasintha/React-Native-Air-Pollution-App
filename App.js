import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import HomeScreen from './screens/HomeScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import RecommendationScreen from './screens/RecommendationScreen';
import FavoriteLocationScreen from './screens/FavoriteLocationScreen';
import NotificationScreen from './screens/NotificationScreen';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
           return <Ionicons name={focused ? 'home' : 'home'} size={size} color={color} />;
        } else if (route.name === 'Profile') {
          return<FontAwesome5 name="user"size={size} color={color} />
        }
        else if (route.name === 'Recommendation') {
          return <MaterialCommunityIcons name="clipboard-check-outline" size={size} color={color}  />
        }
        else if (route.name === 'Locations') {
          return <Ionicons name={focused ? 'location' : 'location'} size={size} color={color} />;
        }
        else if (route.name === 'Notifications') {
          return <Ionicons name={focused ? 'notifications' : 'notifications-outline'} size={size} color={color} />;
        }
       
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name="Home"  component={HomeScreen}  />
      <Tab.Screen name="Profile" component={UserProfileScreen} />
      <Tab.Screen name="Recommendation" component={RecommendationScreen} />
      <Tab.Screen name="Locations" component={FavoriteLocationScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen}  options={{ tabBarBadge: 3 }} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}



