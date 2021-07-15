import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native'
export default function FeaturedNews({item, navigation}) {
    return (
        <TouchableOpacity style={style.flex}
            onPress={() => {
                navigation.navigate('PostItem')
            }}>
            <Image style={style.img} source= {{ uri: item.media[0].url }}/>
            <View style={style.textBody}>
                <Text style={style.header}> {item.title}</Text>
                <View style={{flexDirection: "row",}}>
                    <Text style={style.tag}>{item.author}  </Text>
                    <Text style={{
                        fontSize: 13,
                        color:"#fff",
                        fontWeight: "normal",
                        fontStyle: "normal",
                        paddingTop: 5
                    }}> {item.published_date.split(" ", 1)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    flex:{
        // padding:5,
        borderRadius: 5,
        margin: 8,
        marginRight:20,
        position:"relative",
        // borderColor:"red",
        // borderStyle:"solid",
        // borderWidth:1,
        width:220,
        height:220,
        
        // alignItems: "center",
        // flexDirection: "row",
    },
    img:{
        borderRadius:8,
        flex:1,
        // borderColor:"red",
        // borderStyle:"solid",
        // borderWidth:1,
        width:"100%",
        height:"auto"
    },
    textBody:{
        paddingHorizontal: 10,
        flexShrink: 1,
        top:0,
        left:0,
        right: 0, bottom: 0, 
        justifyContent: 'flex-end', 
        paddingBottom:30,
        // alignItems: 'center',
        position:"absolute",
        backgroundColor:"hsla(0, 0%, 0%, 0.4)",
        borderRadius:8,

    },
    header:{
        fontSize: 16,
        color:"#3e3a59",
        color:"white",

        // fontFamily: "times, serif",
        fontWeight: "bold",
        fontStyle: "normal",
    },
    tag:{
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "italic",
        color:"white",
        paddingTop: 5
    }


})
