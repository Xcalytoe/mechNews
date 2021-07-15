import React, {createContext, useReducer, useState, useEffect} from 'react';
import {allNews, allNewsInitial} from './reducers/newsReducer';

export const GlobalContext = createContext();
export const GlobalProvider =(props)=>{
    const [allNewsState, allNewsDispatch] = useReducer(allNews, allNewsInitial)
    // const [loading, setLoading] =  useState(true)
//     useEffect(() => {
// // check for session
//     }, []);
    return(
        <GlobalContext.Provider value={{
          allNewsState, 
          allNewsDispatch
        }}>
            
            { props.children}
            {/* {!loading && props.children} */}
        </GlobalContext.Provider>
    )
}

