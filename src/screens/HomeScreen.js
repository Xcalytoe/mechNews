import React, {useContext, useEffect} from 'react'
import { View, FlatList, Text,  TouchableOpacity} from 'react-native'
import NewsItem from '../components/NewsItem';
import FeaturedNews from '../components/FeaturedNews'
import { GlobalContext } from '../context/Provider';
import { search } from '../context/action/allNewsAction';

export default function HomeScreen({navigation}) {
    const {allNewsState, allNewsDispatch} = useContext(GlobalContext);
    const {loading, news} = allNewsState
    //  make fetch request 
        const getNews = () =>{
            search('articles?page=1&size=10')(allNewsDispatch)
        }
    useEffect(() => {
        getNews()
    }, [])
  
    // skeletons 
    const skeletonFeature =  <View  style={{
        borderRadius: 5,
        marginRight:20,
        width:220,
        height:180,
        marginBottom:10,
    }}>
        <View style={{ 
            borderRadius:8,
            flex:1,
            width:"100%",
            height:"auto",
            backgroundColor:"hsl(246, 21%, 89%)",}} />
            </View>
    const skeletonItems = <View style={{
        borderRadius: 8,
        margin: 4,
        alignItems: "center",
        flexDirection: "row",
        borderColor:"hsl(246, 21%, 95%)",
        borderStyle:"solid",
        borderWidth:1,
    }}>
        <View style={{
            borderRadius:8,
            borderBottomRightRadius:0,
            borderTopRightRadius:0,
            flexBasis:100,
            backgroundColor:"hsl(246, 21%, 89%)",
            width:100,
            height:100
        }}  />
        <View style={{
            paddingHorizontal: 10,
            flexShrink: 1,
        }}>
            <View style={{
                        backgroundColor:"hsl(246, 21%, 89%)",
                        width: 60,
                        height: 16
            }}/>
            <View style={{
                backgroundColor:"hsl(246, 21%, 89%)",
                width: 100,
                height: 14,
                marginVertical:5
            }}/>
        </View>
    </View>
    return (
        <View style={{flex: 1, padding:10, backgroundColor: "#fbfaff"}}horizontal>
            <View>
                <Text style={{fontSize:22, margin:8, marginBottom:5, fontWeight: "bold"}}>Featured Stories</Text>

                {/* category section */}
                <FlatList
                data={news?.data?.slice(0, 4)} 
                style={{ 
                padding: 8,
                }}
                    horizontal
                    showsHorizontalScrollIndicator ={false}
                        keyExtractor={item => `${item.id}`}
                    renderItem = { ({item}) => {
                        return !loading ?
                        <FeaturedNews item={item} navigation={navigation}/>:
                        skeletonFeature
                    }}
                    />
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", padding:10,marginVertical:5,}}>
                <Text style={{fontSize:18, fontWeight: "bold"}}>Top Stories</Text>
                <TouchableOpacity 
                onPress={() => {
                  navigation.navigate('News')
                }}>
                    <Text style={{fontSize:16, textDecorationLine:"underline"}}>See All</Text>
                </TouchableOpacity>
            </View>
            {/* selected stories  */}
            <FlatList data={news?.data?.slice(4, 8)}
                showsVerticalScrollIndicator ={false}
                keyExtractor={item => `${item.id}`}
                renderItem = { ({item}) => {
                    return !loading ?
                    <NewsItem item={item} navigation={navigation}/>:
                    skeletonItems 
                }}
            />
        
        </View>
    )
}
