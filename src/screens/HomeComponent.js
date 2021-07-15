import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Products from './Products'
export default function HomeComponent({navigation}) {
    return (
       <View>
           <Text style={style.text}>Man's Hot</Text>
           <TouchableOpacity onPress={()=>{
                navigation.navigate('Component')
            }}>
                <Text>Maintain</Text>
            </TouchableOpacity>
            <Products></Products>
       </View>
    )
}

const style = StyleSheet.create({
    text:{
        fontSize:45,
    }
})