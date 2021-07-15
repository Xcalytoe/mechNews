import React from 'react'
import { View, Text, Image } from 'react-native'

export default function ImageDetails({url, title}) {
    return (
        <View>
            <Image source={url}/>
            <Text>{title}</Text>
        </View>
    )
}
