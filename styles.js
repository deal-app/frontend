import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 0,
        flex: 0.4,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        margin: '5%',
        borderRadius: 25,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        padding: 20,
    },
    image: {
        padding: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height* 0.2 * 6 / 8,
    },
    map: {
        flex: 1,
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
})

export default styles;
