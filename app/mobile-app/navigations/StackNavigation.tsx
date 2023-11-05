import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Dashboard } from '../screens/Dashboard';
import { About } from '../screens/About';
import { Profile } from '../screens/Profile';
import { ProductDetails } from '../component/ProductDetails';
import { AddToCart } from '../screens/AddToCart';
import { PayNow } from '../screens/PayNow';
import { AddMoney } from '../screens/AddMoney';
import { DocumentScaner } from '../functionality/documentScanner';


const Stack = createStackNavigator();

export const StackNavigation=() =>{
  return (
    <Stack.Navigator
    screenOptions={({ route }) => ({
        initialRouteName: 'Home',
         tabBarStyle: { backgroundColor: '#fff' },
        headerShown: false,
      
      })}
  >
       <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="About" component={About} />
    <Stack.Screen name="ProductDetails" component={ProductDetails} />
    <Stack.Screen name="AddToCart" component={AddToCart} />
    <Stack.Screen name="PayNow" component={PayNow} />
    <Stack.Screen name="AddMoney" component={AddMoney} />
    <Stack.Screen name="DocumentScaner" component={DocumentScaner} />
  </Stack.Navigator>
  );
}

// export default App;
