import { Text, View} from 'react-native'
import styles from '../styles.js'

function RestaurantName(props){
    return(
        <View>
            <Text style = {{padding: 20, fontSize: 28}}>{props.name}</Text>
        </View>
    )
}

export default RestaurantName
