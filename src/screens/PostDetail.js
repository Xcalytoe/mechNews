import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function PostDetail() {
    return (
        <TouchableOpacity style={style.flex}>
            {/* <Image style={style.img} source={require('../../assets/images/mountain.jpg')}/> */}
            <View style={style.textBody}>
                <Text style={style.tag}>Jane Doe Jun, 2020</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    flex:{
        padding:5,
        borderRadius: 5,
        margin: 10,
        alignItems: "center",
        flexDirection: "row",
    },
    img:{
        borderRadius:8,
        flexBasis:100,
        // borderColor:"red",
        // borderStyle:"solid",
        // borderWidth:1,
        width:100,
        height:100
    },
    textBody:{
        paddingHorizontal: 10,
        flexShrink: 1,
      

    },
    header:{
        fontSize: 16,
        // flexWrap: "wrap",

        // fontFamily: "times, serif",
        fontWeight: "bold",
        fontStyle: "normal",
    },
    tag:{
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "italic",
        paddingTop: 5
    }


})
