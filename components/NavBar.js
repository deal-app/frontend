import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import HomeScreen from './screens/HomeScreen'
import DealsScreen from './screens/DealsScreen'
import RestaurantsScreen from './screens/RestaurantsScreen'
import MapScreen from './screens/MapScreen'

// Screen names

const homeName = 'Home';
const dealsName = 'Deals';
const restaurantsName = 'Restaurants';
const mapName = 'Map';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === dealsName) {
                            iconName = focused ? 'list' : 'list-outline'
                        } else if (rn === restaurantsName) {
                            iconName = focused ? 'restaurant' : 'restaurant-outline'
                        } else if (rn === mapName) {
                            iconName = focused ? 'map' : 'map-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>

                    },
                })}>

                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={dealsName} component={DealsScreen}/>
                <Tab.Screen name={restaurantsName} component={RestaurantsScreen}/>
                <Tab.Screen name={mapName} component={MapScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}