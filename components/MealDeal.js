import { StyleSheet, Text, View, Image } from 'react-native';
import styles from '../styles.js';
import { LinearGradient } from 'expo-linear-gradient';


function MealDeal(props) {
    return (
        
        <View>
            <LinearGradient style={styles.container} colors={['#F08A5D', 'white']}>
            <View style={[{flex: 2, flexDirection: 'row'}]}>
                <Image
                    style={styles.image}
                    source = {{uri: props.image}}
                />
            </View>
            <View style={[{flex: 1, flexDirection: 'row'}]}>
                <View style={{flex: 1}}>
                    <Text style={styles.text}>{props.name}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={[styles.text, {textAlign: 'right'}]}>{props.price}</Text>
                </View>
            </View>
            <View style={[{flex: 1, flexDirection: 'row'}]}>
                <Text style={[styles.text, {textAlign: 'justify'}]}>{props.description}</Text>
            </View>
            </LinearGradient>
        </View>
        
    )
}

export default MealDeal;