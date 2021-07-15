import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlatListComponent from "./src/screens/FlatList";
import HomeComponent from "./src/screens/HomeComponent";
import HomeScreen from "./src/screens/HomeScreen";
import AllNews from "./src/screens/AllNews";
import PostDetails from './src/screens/PostDetail'
import { GlobalProvider } from './src/context/Provider';
// import AppLoading from 'expo-app-loading';
// import { useFonts , Inter_900Black} from 'expo-font';

const Stack = createStackNavigator();

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  //   Inter_900Black
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {

  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            // options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="News" component={AllNews} />
          <Stack.Screen name="Details" component={PostDetails} />
        </Stack.Navigator>
      </NavigationContainer>
     </GlobalProvider>
  );
}
// }

// 
