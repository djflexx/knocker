import React, {useRef, useState} from 'react'
import axios from 'axios'
import './Profile.css'
import ReactDOM from 'react-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import GamesInput from './GamesInput'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'


export default function Profile(){
    const useridRef = useRef();
    const locationRef = useRef();
    const ageRef = useRef();
    const {currentUser} = useAuth();
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [gameInput, setGameInput] = useState('')
    const [userIsSet, setUserIsSet] = useState(false)
    const history = useHistory()
     
    async function handlePost(){
        setLoading(true)
        setDisabled(true)
        await axios.post("https://cors-anywhere.herokuapp.com/" + process.env.REACT_APP_URL,
            {
                userId: `${useridRef.current.value}`,
                email: `${currentUser.email}`,
                game: `${gameInput}`,
                location: `${locationRef.current.value}`,
                age: `${ageRef.current.value}`,
                numOfPartiesJoined: 0,
                numOfPartiesCreated: 0,
                knockerRating: 0
            }
        )
        .catch(err => {console.log(err)});  
        setUserIsSet(true)  
        setLoading(false);
        history.push('/home')

    }
     async function handleSubmit(e){
        e.preventDefault();
        handlePost();
    }

    return ReactDOM.createPortal(
        <>
        <div className="create-profile-cont">
        {!loading ? (
          <div className={!loading ? "small-register-cont": "hidden-cont"}>
            <>
             <h2>Two Steps Registretion</h2>
             <p>Step one - Fill in some details</p>
             <span className="divider"/>
             <div className= "form-cont">
                 <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="User Name" ref={useridRef}/>
                    <span className="divider"/>
                    <GamesInput placeholder="Main Game" grabInput={setGameInput}/>
                    <span className="divider"/>
                    <input type="text" placeholder="Location" ref={locationRef}/>
                    <span className="divider"/>
                    <input type="text" placeholder="Age" ref={ageRef}/>
                    <span className="divider"/>
                    <button type="submit" disabled={disabled}>Submit</button>
                 </form> 
             </div> 
            </>        
            </div> ) : <><h2>We are creating your account</h2><CircularProgress/> </>}   
          </div>
        </>
        , document.getElementById("addprofile")
    )
}
