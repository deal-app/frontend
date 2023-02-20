import * as React from 'react';
import { View, Text, NativeModules } from 'react-native';
import MealDeal from './MealDeal'
import { REACT_APP_IP_ADDRESS } from "@env"

function MealDealsList(props){
    const [mealDeals, setMealDeals] = React.useState([])
    const url = 'http://' + REACT_APP_IP_ADDRESS + ':3000/api/meal-deals/' + props.restaurantID

    console.log(url)

    React.useEffect(() => {
        fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then(data => {
                setMealDeals(data.mealDeals)
                console.log(data.mealDeals)
            })
            .catch(error => console.log(error))
    }, [])


    if (mealDeals.length === 0){
        return null;
    } else{

        return (
            <View>
                { mealDeals.map(mealDeal => (
                    <MealDeal
                        key = {mealDeal._id}
                        name = {mealDeal.name}
                        description = {mealDeal.description}
                        price = {mealDeal.price}
                        image = {mealDeal.image}
                    />
                ))}
            </View>
        )
    }
}

export default MealDealsList