import { StyleSheet, Text, View, Image } from 'react-native';
import styles from '../styles.js';
import { LinearGradient } from 'expo-linear-gradient';


function Restaurants(props) {
    return (
        
        <View>
            <LinearGradient style={styles.container} colors={['#F08A5D', 'white']}>
            <View style={[{flex: 2, flexDirection: 'row'}]}>
                <Image
                    style={styles.image}
                    /*source = {{uri: props.image}}*/
                />
            </View>
            <View style={[{flex: 1, flexDirection: 'row'}]}>
                <View style={{flex: 1}}>
                    <Text style={styles.text}>Restorano pavadinimas</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={[styles.text, {textAlign: 'right'}]}>Restorano ypatumai</Text>
                </View>
            </View>
            <View style={[{flex: 1, flexDirection: 'row'}]}>
                <Text style={[styles.text, {textAlign: 'justify'}]}>Restorano aprašymas</Text>
            </View>
            </LinearGradient>
        </View>
        
    )
}

export default Restaurants;