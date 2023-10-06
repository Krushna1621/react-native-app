import {View,Text,StyleSheet} from 'react-native'

export default function App(){
    return(
        <View style={style.container}>
            <View style={style.lightblueBox}>
                <Text>Lightblue Box</Text>
            </View>
            <View style={style.lightgreenBox}>
                <Text>Lightgreen Box</Text>
            </View>
        </View>
        
    )
}

const style=StyleSheet.create({
    container:{flex:1,backgroundColor:"red",padding:60},
    lightblueBox:{
        backgroundColor:"lightblue",
        width:100,
        height:100,
        padding:10
    },
    lightgreenBox:{
        backgroundColor:"lightgreen",
        width:100,
        height:100,
        padding:10
    }
})