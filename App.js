import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';

import HomeScreen from './screens/HomeScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import RecommendationScreen from './screens/RecommendationScreen';
import FavoriteLocationScreen from './screens/FavoriteLocationScreen';
import NotificationScreen from './screens/NotificationScreen';
import AirPolutionScreen from './screens/AirPolutionScreen';
import Checkme from './screens/Checkme';
import { Provider,useDispatch  } from 'react-redux';
import { addLocationData } from './redux/reducers/LocationSlice';
import RootReducer from './redux/reducers/RootReducer';
import { configureStore } from '@reduxjs/toolkit';

import { Storage } from 'expo-storage'

const store = configureStore({
  reducer: RootReducer
})

const Tab = createBottomTabNavigator();
export default function App() {
  const [locationData,setLocationData] = useState(null)
 
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      let geocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
  
      if (geocode.length > 0) {
         setLocationData(geocode[0])
         await Storage.setItem({
          key: `current_location`,
          value: JSON.stringify({location:geocode[0].name})
        }) 
      }
    
    })();
  }, []);
  return (
    <Provider store={store}>
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
          else if(route.name === "Air Pollution"){
            return <MaterialCommunityIcons name="air-filter" size={size} color={color} />
          }else if(route.name === "Check Me"){
            return <Feather name="check-square" size={size} color={color} />
          }
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerTitleStyle: {
            fontSize: 18, 
            color: '#318f5e',
          },
      })}
      >
        <Tab.Screen name="Home"   component={HomeScreen}  />
        <Tab.Screen name="Profile" component={UserProfileScreen} />
        <Tab.Screen name="Recommendation" component={RecommendationScreen} />
        <Tab.Screen name="Locations" component={FavoriteLocationScreen}  />
        <Tab.Screen name="Notifications" component={NotificationScreen}  options={{ tabBarBadge: 3 }}/>
        <Tab.Screen name="Air Pollution"  component={AirPolutionScreen} />
        <Tab.Screen name="Check Me"  component={Checkme}/>
      </Tab.Navigator>
    </NavigationContainer>
  </Provider>
  );
}



