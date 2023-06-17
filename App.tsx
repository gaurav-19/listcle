import React from 'react';
import {
  Image,
  SafeAreaView,
} from 'react-native';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screens/auth/Splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from './src/utils/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screens/auth/Home';
import Favorites from './src/screens/auth/Favorites';
import Profile from './src/screens/auth/Profile';

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const Tabs = () => (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused
            ? require('./src/assets/home_active.png')
            : require('./src/assets/home.png');
        } else if (route.name === 'Profile') {
          icon = focused
            ? require('./src/assets/profile_active.png')
            : require('./src/assets/profile.png');
        } else if (route.name === 'Favorites') {
          icon = focused
            ? require('./src/assets/bookmark_active.png')
            : require('./src/assets/bookmark.png');
        }

        // You can return any component that you like here!
        return <Image source={icon} />;
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {borderTopColor: colors.lightGrey}
    })} >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Favorites' component={Favorites} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )

  const App = () => {
    const isSignedIn = true;

    const theme = {
      colors:{
        background: colors.white
      }
    }
    return (
      <SafeAreaProvider>
        <NavigationContainer theme={theme} >
          <Stack.Navigator>
            {isSignedIn ? <>
            <Stack.Screen name="Tabs" component={Tabs}options={ {headerShown: false} }/>
            </> :
            <>
            <Stack.Screen name="Splash" component={Splash} options={ {headerShown: false} }/>
            <Stack.Screen name="Signin" component={Signin} options={ {headerShown: false} }/>
            <Stack.Screen name="Signup" component={Signup} 
            options={ {headerShown: false} }/>
            </>
          }
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }


export default App;
