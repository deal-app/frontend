import * as React from 'react';
import { View, Text, NativeModules } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MealDealsList from '../MealDealsList'
import RestaurantName from '../RestaurantName';
import { REACT_APP_IP_ADDRESS } from "@env"


export default function DealsScreen({navigation}) {
    const [restaurants, setRestaurants] = React.useState([])
    const url = 'http://' + REACT_APP_IP_ADDRESS + ':3000/api/restaurants'

    console.log(url)

    React.useEffect(() => {
        fetch(url, {method: 'GET'})
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