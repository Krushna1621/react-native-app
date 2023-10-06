import {View,Text,StyleSheet} from 'react-native'

export default function App(){
    return(
        <View style={style.container}>
            <Text style={style.title}>StyleSheet API</Text>
        </View>
    )
}

const style=StyleSheet.create({
    container:{flex:1,backgroundColor:"red",padding:60},
    title:{color:"yellow"} 
})