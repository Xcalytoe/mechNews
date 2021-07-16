import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native'
export default function NewsItem({item, navigation}) {
    return (
        <TouchableOpacity style={style.flex}
        onPress={() => {
            navigation.navigate('Detail', {item:item})
        }}>
            <Image style={style.img}  source= {{ uri: item.media[0].url }}/>
            <View style={style.textBody}>
                <Text style={style.header}> {item.title}</Text>
                <View style={{flexDirection: "row",}}>
                    <Text style={style.tag}>{item.author}  </Text>
                    <Text style={{
                        fontSize: 12,
                        color:"#3e3a59",
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
        borderRadius: 8,
        margin: 4,
        alignItems: "center",
        flexDirection: "row",
        borderColor:"hsl(246, 21%, 95%)",
        borderStyle:"solid",
        borderWidth:1,
    },
    img:{
        borderRadius:8,
        borderBottomRightRadius:0,
        borderTopRightRadius:0,
        flexBasis:100,
        backgroundColor:"hsl(246, 21%, 89%)",
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
        color:"#3e3a59",
        // flexWrap: "wrap",

        // fontFamily: "times, serif",
        fontWeight: "bold",
        fontStyle: "normal",
    },
    tag:{
        fontSize: 12,
        color:"#3e3a59",
        fontWeight: "normal",
        fontStyle: "italic",
        paddingTop: 5
    }


})
