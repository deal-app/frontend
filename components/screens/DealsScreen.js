import * as React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MealDealsList from '../MealDealsList'
import RestaurantName from '../RestaurantName';

export default function DealsScreen({navigation}) {
    const [restaurants, setRestaurants] = React.useState([])

    React.useEffect(() => {
        fetch('http://192.168.0.106:3000/api/restaurants', {method: 'GET'})
            .then(response => response.json())
            .then(data => {
                setRestaurants(data.restaurants)    
            })
            .catch(error => console.log(error))
    }, [])


    console.log(restaurants)

    restaurants.map(restaurant => {
        console.log(restaurant._id)
    })
    return(
        <ScrollView >
            { restaurants.map(restaurant => (
                
                <View key = {restaurant._id}>
                    <RestaurantName name = {restaurant.name}/>
                    
                    <MealDealsList restaurantID = {restaurant._id.toString()}/>

                </View>
            ))}
        </ScrollView>
    )
}