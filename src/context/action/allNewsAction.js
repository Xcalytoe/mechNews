import ApiHandler from "../../services/ApiHandler"
import { NEWS_ERROR, NEWS_SUCCESS, NEWS_LOADING } from "../actionsType/actiontypes"

export const search = (url) => async (allNewsDispatch)=> {
    allNewsDispatch({
        type: NEWS_LOADING,
        loading: true
    })
    try {
        const {data} = await ApiHandler.get(url)
        allNewsDispatch({
            type:NEWS_SUCCESS,
            loading:false,
            payload :data.data
        })
       
        return data
    } catch (error) {
        allNewsDispatch({
            type:NEWS_ERROR,
            loading:false,
            payload :error
        })
        console.log('gggggggggmmmmm', error) 
    }
}