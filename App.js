import {View,Text,StyleSheet} from 'react-native'

export default function App(){
    return(
        <View style={style.container}>
            <View style={style.darkMode}>
                <Text style={style.darkText}>Style Inheritance</Text>
            </View>
            <View style={[style.lightblueBg,style.Box]}>
                <Text style={{borderRadius:5,backgroundColor:"red"}}>Lightblue Box</Text>
            </View>
            <View style={style.lightgreenBg}>
                <Text>Lightgreen Box</Text>
            </View> 
        </View>
        
    )
}

const style=StyleSheet.create({
    container:{flex:1,backgroundColor:"red",padding:60},
    darkMode:{
        backgroundColor:"black"
    },
    darkText:{
        color:"white"
    },
    Box:{width:100,
        height:100,
        // padding:10,
        paddingHorizontal:20,
        paddingVertical:20,
        marginVertical:10,
        backgroundColor:"pink",
        borderRadius:10
    }
    ,
    lightblueBg:{
        backgroundColor:"lightblue",
        
    },
    lightgreenBg:{
        backgroundColor:"lightgreen",
        width:100,
        height:100,
        padding:10
    }
})