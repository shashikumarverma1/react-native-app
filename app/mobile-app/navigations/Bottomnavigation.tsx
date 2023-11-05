import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Menu } from '../component/menu';
import { Home } from '../screens/Home';
// import App from '../App';

const Tab = createBottomTabNavigator();
import { NavigationContainer } from '@react-navigation/native';
import { Dashboard } from '../screens/Dashboard';
import { StackNavigation } from './StackNavigation';
export const BottomNavigation=({navigation})=>{
  return (
    <NavigationContainer>
  <Tab.Navigator
    screenOptions={({ route }) => ({
        initialRouteName: 'Home',
         tabBarStyle: { backgroundColor: '#fff' },
        headerShown: false,
      
      })}
  >
      <Tab.Screen name="StackNavigation" component={StackNavigation} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Back" component={StackNavigation}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.goBack()
          },
        })} />
    </Tab.Navigator>
    </NavigationContainer>
  
  );
}