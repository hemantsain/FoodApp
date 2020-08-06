import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '../common/routes';
import Recipes from '../screens/Recipes/Recipes';
import Restaurants from '../screens/Restaurants/Restaurants';
import {Colors} from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: Colors.themeColor,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTintColor: Colors.white,
  headerTitleStyle: {
    fontWeight: '500',
    fontSize: 26,
  },
  headerTitleAlign: 'left',
};

const RecipesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.recipes}
      screenOptions={screenOptions}>
      <Stack.Screen name={routes.recipes} component={Recipes} />
    </Stack.Navigator>
  );
};

const RestaurantsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.restaurants}
      screenOptions={screenOptions}>
      <Stack.Screen name={routes.restaurants} component={Restaurants} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.recipes}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === routes.recipes) {
            iconName = 'receipt-outline';
          } else if (route.name === routes.restaurants) {
            iconName = 'restaurant-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.themeColor,
        inactiveTintColor: Colors.textColorGray,
      }}>
      <Tab.Screen name={routes.recipes} component={RecipesStack} />
      <Tab.Screen name={routes.restaurants} component={RestaurantsStack} />
    </Tab.Navigator>
  );
};

export default function Navigator() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
