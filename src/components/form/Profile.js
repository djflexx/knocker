import React, {useRef, useState, useEffect} from 'react'
import axios from 'axios'
import './Profile.css'
import ReactDOM from 'react-dom';
import Register from './Register'
import CircularProgress from '@material-ui/core/CircularProgress';
import GamesInput from './GamesInput'


export default function Profile(){
    const useridRef = useRef();
    const locationRef = useRef();
    const ageRef = useRef();
    const [isSubmit, setIsSubmitted] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [gameInput, setGameInput] = useState('')
     
    async function handlePost(){
        setLoading(true)
        setDisabled(true)
        await axios.post("https://cors-anywhere.herokuapp.com/" + process.env.REACT_APP_URL,
            {
                userId: `${useridRef.current.value}`,
                game: `${gameInput}`,
                location: `${locationRef.current.value}`,
                age: `${ageRef.current.value}`,
                numOfPartiesJoined: 0,
                numOfPartiesCreated: 0,
                knockerRating: 0
            }
        ).then((res) => {console.log(res)})
        .catch(err => {console.log(err)});    
        setIsSubmitted(true);
        setLoading(false);
    }
     async function handleSubmit(e){
        e.preventDefault();
        handlePost();
    }

    return ReactDOM.createPortal(
        <>
        {!isSubmit &&(
        <div className="create-profile-cont">
          <div className="small-register-cont">
          {!loading ? (
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
          ): <><h2>We are creating your account</h2><CircularProgress/> </>}         
             </div>
          </div>
        )}
        {isSubmit && <Register/> }
        </>
        , document.getElementById("addprofile")
    )
}
