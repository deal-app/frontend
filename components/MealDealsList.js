import * as React from 'react';
import { View, Text } from 'react-native';
import MealDeal from './MealDeal'

function MealDealsList(props){
    const [mealDeals, setMealDeals] = React.useState([])
    const url = 'http://192.168.0.106:3000/api/meal-deals/' + props.restaurantID

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