import React from 'react';
import {Image} from 'react-native'
import {Icon} from '../common/Icon'
import Home from '../screens/home/Home';
import SplashScreen from './SplashScreen';
import { Colors } from '../common/Colors';
import Help from '../screens/profile/Help';
import UserChat from '../screens/chat/UserChat';
import AboutUs from '../screens/profile/AboutUs';
import Location from '../screens/location/Location';
import CreatePost from '../screens/post/CreatePost';
import UserProfile from '../screens/profile/UserProfile';
import DetailsScreen from '../screens/home/DetailsScreen';
import SignUpScreen from '../screens/signup/SignUpScreen';
import MyAddress from '../screens/profile/addresses/MyAddress';
import StartedScreen from '../screens/onboarding/GetStartedScreen';
import RecomendedListing from '../screens/home/RecomendedListing  ';
import YourListing from '../screens/profile/yourListing/YourListing';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateAddress from '../screens/profile/addresses/CreateAddress';
import EditProduct from '../screens/profile/detialsScreen/EditProduct';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditDetailsScreen from '../screens/profile/detialsScreen/EditDetialsScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

 export const BottomTabs = () => {
  return (
    <Tab.Navigator
   
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#996533',
        inactiveBackgroundColor:Colors.backgroundColor,
        style: {
      backgroundColor: Colors.backgroundColor,
      borderTopColor:Colors.backgroundColor, 
    },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            focused ?
            <Image source={Icon.home} style={{height:24, width:24}}/>
            :
            <Image source={Icon.home} style={{height:21, width:21}}/>
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({focused}) => (
            focused ?
            <Image source={Icon.location} style={{height:24, width:25}}/>
            :
            <Image source={Icon.location} style={{height:21, width:22}}/>
          ),
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon:({focused}) => (
            focused ?
            <Image source={Icon.post} style={{height:45, width:45}}/>
            :
            <Image source={Icon.post} style={{height:40, width:40}}/>
          ),
  
        }}
      />
      <Tab.Screen
        name="UserChat"
        component={UserChat}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({focused}) => (
            focused ?
            <Image source={Icon.chat} style={{height:25, width:30}}/>
            :
            <Image source={Icon.chat} style={{height:21, width:26}}/>
          ),
        }}
      />

      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            focused ?
            <Image source={Icon.user} style={{height:25, width:22}}/>
            :
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