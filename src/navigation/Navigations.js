import React from 'react';
import {View, Platform, Image} from 'react-native'
import {Icon} from '../common/Icon'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StartedScreen from '../screens/onboarding/GetStartedScreen';
import SignUpScreen from '../screens/signup/SignUpScreen';
import Home from '../screens/home/Home';
import Location from '../screens/location/Location';
import CreatePost from '../screens/post/CreatePost';
import UserChat from '../screens/chat/UserChat';
import UserProfile from '../screens/profile/UserProfile';
import { Colors } from '../common/Colors';
import RecomendedListing from '../screens/home/RecomendedListing  ';
import DetailsScreen from '../screens/home/DetailsScreen';
import AboutUs from '../screens/profile/AboutUs';
import Help from '../screens/profile/Help';
import SplashScreen from './SplashScreen';
import MyAddress from '../screens/profile/addresses/MyAddress';
import CreateAddress from '../screens/profile/addresses/CreateAddress';
import YourListing from '../screens/profile/yourListing/YourListing';
import EditDetailsScreen from '../screens/profile/detialsScreen/EditDetialsScreen';
import EditProduct from '../screens/profile/detialsScreen/EditProduct';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

 export const BottomTabs = () => {
  return (
    <Tab.Navigator
   
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#996533',
        // activeBackgroundColor:Colors.button,
        inactiveBackgroundColor:Colors.backgroundColor,
        style: {
      backgroundColor: Colors.backgroundColor,
     
      borderTopColor:Colors.backgroundColor, //Change Like This
    },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image source={Icon.home} style={{height:21, width:21}}/>
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({color, size}) => (
            <Image source={Icon.location} style={{height:21, width:22}}/>
          ),
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({color, size}) => (
            <Image source={Icon.post} style={{height:40, width:40}}/>
          ),
  
        }}
      />
      <Tab.Screen
        name="UserChat"
        component={UserChat}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color, size}) => (
            <Image source={Icon.chat} style={{height:21, width:26}}/>
          ),
        }}
      />

      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Image source={Icon.user} style={{height:21, width:18}}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigator = () => {

  return (
    <Stack.Navigator initialRouteName="SplashScreen">
    <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
    <Stack.Screen
          name="StartedScreen"
          component={StartedScreen}
          options={{ headerShown: false }}
        />

         <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="RecomendedListing"
          component={RecomendedListing}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Help"
          component={Help}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="MyAddress"
          component={MyAddress}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAddress"
          component={CreateAddress}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="YourListing"
          component={YourListing}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="EditDetailsScreen"
          component={EditDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProduct"
          component={EditProduct}
          options={{ headerShown: false }}
        />

    </Stack.Navigator>
  );
};

export default Navigator;