import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'

export default function FlatListComponent() {
    const list = [
        {age: 20},
        {age: 30},
        {age: 40},
        {age: 50},
        {age: 60},
        {age: 70},
        {age: 80},
    ]
    return (
        <View>
            <FlatList data={list}
           
            // horizontal
            showsVerticalScrollIndicator
            keyExtractor={(list, index) => `${index}`}
                renderItem={({item})=>{
                    return <Text style={style.list} >age : {item.age}</Text>
                }}/>
        </View>
    )
}
const style = StyleSheet.create({
    list:{
        marginVertical:50,
    }
})
