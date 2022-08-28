import { StyleSheet } from "react-native";

const style =  StyleSheet.create({
    container:{
        flex:3,
        margin:5,
        padding:5,
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    rows:{
        flex:1,
        alignItems:'center',
        borderWidth:0.5,
        borderColor:'grey'
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    title_data:{
        fontSize:17,
        margin:10,
        fontWeight:'600'
    }

})

export default style