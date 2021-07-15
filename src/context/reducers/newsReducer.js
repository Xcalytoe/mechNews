import { NEWS_LOADING, NEWS_SUCCESS, NEWS_ERROR} from "../actionsType/actiontypes";
export const allNewsInitial ={
    loading: false,
    news: [],
    error:null,
}
export const allNews =(state = allNewsInitial, action)=>{
     const {type, payload} = action;
    switch(type){
        case NEWS_LOADING:
            return{
                ...state,
                loading:true,
                error: null,
            }
        case NEWS_SUCCESS:
        return {
            ...state,
            loading:false,
            error: null,
            news: payload,
        }
        case NEWS_ERROR:
            return{
                loading: false,
                error:payload,
            }
        default:
            return state
    }
}