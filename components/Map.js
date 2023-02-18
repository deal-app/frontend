import * as React from 'react';
import MapView from 'react-native-maps';
import { View, TextInput } from 'react-native';
import styles from '../styles.js';

// Norint paleisti Appa su Google maps reikia atlikti šiuos žingsnius: https://docs.expo.dev/versions/latest/sdk/map-view/

// Suteikti stilių galima su šiuo įrankiu https://mapstyle.withgoogle.com/

var region = {
    latitude: 54.712512323985656,
    longitude: 25.27915544736603,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
};

function Map() {
    return (
        <View>
            <MapView style={[styles.map]} initialRegion={region} />
        </View>
        
    );
}

export default Map;