import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 0.2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        padding: 20,
        fontFamily: 'Cochin'
    },
    image: {
        padding: 5,
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height* 0.2 * 6 / 8,
    }
})

export default styles;
