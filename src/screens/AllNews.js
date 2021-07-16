import React, {useEffect, useContext, useState} from 'react'
import { View, FlatList, Text,  StyleSheet, ActivityIndicator} from 'react-native'
import NewsItem from '../components/NewsItem'
import { GlobalContext } from '../context/Provider';
import { search } from '../context/action/allNewsAction';
import {API_BASE_URL} from '@env'
import axios from 'axios';

export default function AllNews({navigation}) {
    const {allNewsState, allNewsDispatch} = useContext(GlobalContext);
    const {loading, news} = allNewsState;
   //  make fetch request 
   const getNews = () =>{
        search('articles?page=1&size=10')(allNewsDispatch)
    }
    useEffect(() => {
        if(!news?.data?.length){
            getNews()
        }
    }, [news])
    // store global state in useState 
    useEffect(() => {
        setPageNews(news?.data)
    }, [])

    const [pageNews, setPageNews] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [newsLoading, setNewsLoading] = useState(false)

    // fetch news request 
    const fetchNews = async () => {
        setNewsLoading(true)
        let url = `${API_BASE_URL}articles?page=${pageNo}&size=${ pageSize }`
        try {
            let {data} = await axios.get(
                url,
                {headers: {
                    'Content-Type': 'application/json'
                }})
                setPageNews(pageNews.concat(data?.data?.data))
                setNewsLoading(false)
            
        } catch (error) {
            setNewsLoading(false)
            console.log("error", error)
        }
    }
    // increment page and fetch news 
    const loadMore = () => {
        if(news?.metadata?.last_page >= pageNo){
            setPageNo(pageNo + 1);
            fetchNews();
        }
    }
    // loading icon 
    const loadingIcon = () => {
        return(
            newsLoading ?
            <View style={style.loader}>
                <ActivityIndicator size="large" color="#2614C1"/>
            </View> : null
        )
    }
 
    return (
        <View style={{flex:1, padding:10, backgroundColor: "#fbfaff"}}horizontal>
            <View>
                <FlatList data={pageNews}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0}
                    showsVerticalScrollIndicator ={false}
                    keyExtractor={(item, index) => `${item.id}${index}`}
                    ListFooterComponent ={loadingIcon}
                    renderItem = { ({item}) => {
                        return <NewsItem item={item} navigation={navigation}/>
                    }}
                />
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    loader:{
        marginTop:10,
        alignItems:"center",
    }
})
