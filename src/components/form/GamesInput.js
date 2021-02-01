import React,{ useContext, useState, useEffect} from 'react'
import {GamesContext} from '../../context/GameContext'
import './GamesInput.css'

export default function GamesInput(props) {
    const gamesList = useContext(GamesContext)
    const [inputValue, setInputValue] = useState('')
    const [validData, setValidData] = useState([])
    useEffect(()=> {
        function filtering() {
            const newArray = gamesList.data.results.filter(item => {
                return item.name.toLowerCase().search(inputValue.toLowerCase()) !== -1;
            },[]);
            setValidData(newArray)
        }
        filtering();
        props.grabInput(inputValue)
        return() => {
            setValidData([])
        }
    },[inputValue])
    const handleClick = (e) => {
        setInputValue(e.target.innerHTML)
    }
    return (
        <React.Fragment>
        {
        inputValue.length > 0 && 
        <ul className="games-cont">
        {validData.length < 0 ? 
        <p>No Games Were Found</p>
        :
        <>
        {validData.map((name,index) => {
                return( 
                   <li key={index} onClick={handleClick}>{name.name}</li>
                    )
            })} 
        </>      
        }
        </ul>
        }  
           <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder={props.placeholder}></input> 
        </React.Fragment>   
    )
}
