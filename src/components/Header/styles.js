import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
    container:{
        width:"85%",
        alignItems:'center',
        paddingVertical:25,
        borderStyle:"solid",
        borderColor:'black',
        borderRadius:10,
        marginLeft:15,
        marginRight:15,
        marginTop:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title:{
        fontSize:36,
        fontWeight:'700',

        color:'blue'
    },
    Subtitle:{
        fontSize:18,
        color:'gray'
    },
    line:{
        width:90,
        height:1,

        marginTop:15,
        marginBottom:5,

        backgroundColor:'gray',
    }
});