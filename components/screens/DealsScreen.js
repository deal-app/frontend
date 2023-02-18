import * as React from 'react';
import { View, Text } from 'react-native';
import MealDeal from '../MealDeal'

export default function DealsScreen({navigation}) {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/*<Text onPress={() => navigation.navigate('Home')} style={{ fontSize:26, fontWeight: 'bold'}}>Deals Screen</Text>*/}
            <MealDeal/>
        </View>
    );
}