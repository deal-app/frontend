import { StyleSheet, Text, View, Image } from 'react-native';
import styles from '../styles.js';


function MealDeal(props) {
    return (
        <View style={styles.container}>
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
                <View style={{flex: 1}}>
                    <Text style={[styles.text, {textAlign: 'right'}]}>{props.price}</Text>
                </View>
            </View>
            <View style={[{flex: 1, flexDirection: 'row'}]}>
                <Text style={[styles.text, {textAlign: 'justify'}]}>{props.description}</Text>
            </View>
        </View>
    )
}

export default MealDeal;