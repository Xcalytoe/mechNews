import React from 'react'
import { View, Image, Text, ScrollView, StyleSheet} from 'react-native'

export default function PostDetail({route}) {
    let item = route?.params?.item
    return (
        <ScrollView style={{ padding:10, backgroundColor: "#fbfaff",}}>
            <Image style={style.img} source= {{ uri: item.media[0].url }}/>
            <View >
                <Text style={style.header}> {item.title}</Text>
                <Text style={style.tag}>~ {item.news_source.name}  </Text>                
            </View>
            <View style={{flexDirection: "row", alignItems:"center", paddingVertical: 10,}}>
                    <Image style={{
                        width:40, 
                        height:40,
                        borderColor:"hsl(246, 21%, 75%)",
                        borderStyle:"solid",
                        borderWidth:1, 
                        borderRadius:20,
                        backgroundColor:"hsl(246, 21%, 89%)",
                    }} source= {{ uri: item.categories[0].url }}/>
                        
                    <View style={{marginLeft:10,}}>
                        <Text style={style.tag}>{item.author}  </Text>
                        <Text style={{
                            fontSize: 14,
                            color:"#595582",
                            fontWeight: "normal",
                            fontStyle: "normal",
                            paddingTop: 1
                        }}> {item.published_date}</Text>
                    </View>
                </View>
                <View style={{marginTop:10, paddingBottom:20}}>
                    <Text style={{
                         fontSize: 16,
                         fontWeight: "normal",
                         color:"#595582",
                         fontWeight:"500",
                         lineHeight:25
                    }}>{item.content}</Text>
                     <Text style={{
                         fontSize: 16,
                         marginTop:10,
                         fontWeight: "normal",
                         color:"#595582",
                         fontWeight:"500",
                         lineHeight:25
                    }}>{item.summary}</Text>
                </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
  
    img:{
        borderRadius:8,
        width:"100%",
        height:200, 
        backgroundColor:"hsl(246, 21%, 89%)",
        
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
        fontSize: 18,
        color:"#3e3a59",
        color:"#595582",
        marginTop:10,
        // fontFamily: "times, serif",
        fontWeight: "bold",
        fontStyle: "normal",
    },
    tag:{
        fontSize: 16,
        fontWeight: "normal",
        color:"#595582",
        fontWeight:"500"
    }


})