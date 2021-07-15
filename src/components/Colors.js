import React, {useState} from 'react'
import { TouchableOpacity, View, StyleSheet , FlatList, Text} from 'react-native'
export default function Colors() {
    const [color, setColor] = useState([]);
    console.log(color)
    return (
        <View>
            <TouchableOpacity onPress={()=>{
                setColor([...color, randonColor()])
            }}>
                <Text>Select color</Text>
            </TouchableOpacity>
            <FlatList 
            data={color}
            renderItem={({item}) => {
               return <View style={{height:40, width:60, backgroundColor: item}}/>

            }}/>
        </View>
    )
}

const randonColor = () =>{
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`
}