import React,{useState, createContext,useEffect} from 'react'
import axios from 'axios'

export const GamesContext = createContext(); 

export function GamesProvider(props) {
        const [data, setData] = useState([])
    useEffect(()=>{
        axios('https://rawg-video-games-database.p.rapidapi.com/games',{
            headers:{
                "x-rapidapi-key": process.env.REACT_APP_GAMES_API,
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "useQueryString": true
            }
        })
        .then(res => setData(res))
        .catch(err => {console.log(err)});
    },[])
    return (
        <GamesContext.Provider value={data}>
            {props.children}
        </GamesContext.Provider>
    )
}
