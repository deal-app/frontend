import { StyleSheet, Text, View, Image } from 'react-native';
import styles from '../styles.js';


function MealDeal() {
    return (
        <View style={styles.container}>
            <View style={[{flex: 6, flexDirection: 'row'}]}>
                <Image
                    style={styles.image}
                    source = {require('../images/dodo_image.jpeg')}
                />
            </View>
            <View style={[{flex: 2, flexDirection: 'row'}]}>
                <View style={{flex: 1}}>
                    <Text style={styles.text}>Dodo pietų pasiūlymas</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={[styles.text, {textAlign: 'right'}]}>6.95</Text>
                </View>
            </View>
            <View style={[{flex: 1, flexDirection: 'row'}]}>
                <Text style={[styles.text, {textAlign: 'justify'}]}>Pirk bet kurią 20 cm picą ir gauk 300 ml gėrimo</Text>
            </View>
        </View>
    )
}

export default MealDeal;