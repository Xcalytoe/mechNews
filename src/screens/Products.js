import React from 'react'
import { View } from 'react-native'
import ImageDetails from './ImageDetails'

export default function Products() {
    return (
        <View>
            <ImageDetails url={require('../../assets/images/beach.jpg')} title="Beach"/>
            <ImageDetails url={require('../../assets/images/forest.jpg')} title="Forest"/>
            <ImageDetails url={require('../../assets/images/mountain.jpg')} title="Mountain"/>

        </View>
    )
}
