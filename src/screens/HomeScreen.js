import React, {useContext, useEffect} from 'react'
import { View, FlatList, Text,  Button} from 'react-native'
import NewsItem from '../components/NewsItem';
import FeaturedNews from '../components/FeaturedNews'
import { GlobalContext } from '../context/Provider';
import { search } from '../context/action/allNewsAction';

export default function HomeScreen({navigation}) {
    const {allNewsState, allNewsDispatch} = useContext(GlobalContext);
    const {loading, news} = allNewsState
    //  make fetch request 
        const getNews = (page, size) =>{
            search(`articles?page=${page || 1}&size=${ size || 10}`)(allNewsDispatch)
        }
    useEffect(() => {
        getNews()
    }, [])
  
    return (
        <View style={{flex: 1, padding:10, backgroundColor: "#fbfaff"}}horizontal>
        {/* category section */}
          <FlatList
           data={news.slice(0, 4)}
            horizontal
            showsHorizontalScrollIndicator ={false}
              keyExtractor={(item, index) => item.id}
              renderItem = { ({item}) => {
                  return <FeaturedNews item={item} navigation={navigation}/>
              }}
            />
            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", padding:10,}}>
                <Text >Clane Stories</Text>
                <Button 
                title="See All"
                onPress={() => {
                  navigation.navigate('AllNews')
                }}/>
            </View>
            {/* selected stories  */}
            <FlatList data={news.slice(4, 8)}
                showsVerticalScrollIndicator ={false}
                keyExtractor={(item, index) => `news${index}` }
                renderItem = { ({item}) => {
                    return <NewsItem item={item} navigation={navigation}/>
                }}
            />
        
        </View>
    )
}
