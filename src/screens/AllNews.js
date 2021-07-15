import React, {useEffect} from 'react'
import { View, FlatList, Text,  Button} from 'react-native'
import NewsItem from '../components/NewsItem'
import { GlobalContext } from '../context/Provider';
import { search } from '../context/action/allNewsAction';

export default function AllNews({navigation}) {
    const {allNewsState, allNewsDispatch} = useContext(GlobalContext);
    const {loading, news} = allNewsState;
   //  make fetch request 
   const getNews = (page, size) =>{
        search(`articles?page=${page || 1}&size=${ size || 10}`)(allNewsDispatch)
    }
    useEffect(() => {
        if(!news.length){
            getNews()
        }
    }, [news])
    return (
        <View style={{flex: 1, padding:10, backgroundColor: "#fbfaff"}}horizontal>
            <FlatList data={news}
                showsVerticalScrollIndicator ={false}
                keyExtractor={(item, index) => `news${index}` }
                renderItem = { ({item}) => {
                    return <NewsItem item={item} navigation={navigation}/>
                }}
            />
        
        </View>
    )
}
