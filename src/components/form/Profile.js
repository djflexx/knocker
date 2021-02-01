import React, {useRef, useState} from 'react'
import axios from 'axios'
import './Profile.css'
import ReactDOM from 'react-dom';
import Register from './Register'


export default function Profile(){
    const useridRef = useRef();
    const gameRef = useRef();
    const locationRef = useRef();
    const ageRef = useRef();
    const [isSubmit, setIsSubmitted] = useState(false);
     
    async function handlePost(){
        await   axios.post("https://cors-anywhere.herokuapp.com/" + process.env.REACT_APP_URL,
            {
                userId: `${useridRef.current.value}`,
                game: `${gameRef.current.value}`,
                location: `${locationRef.current.value}`,
                age: `${ageRef.current.value}`
            }
        ).then((res) => {console.log(res)})
        .catch(err => {console.log(err)});    
        setIsSubmitted(true);
    }
     async function handleSubmit(e){
        e.preventDefault();
        handlePost();
    }

    return ReactDOM.createPortal(
        <>
        {!isSubmit && (
        <div className="create-profile-cont">
          <div className="small-register-cont">
             <h2>Two Steps Registretion</h2>
             <p>Step one - Fill in some details</p>
             <span className="divider"/>
             <div className= "form-cont">
                 <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="User Name" ref={useridRef}/>
                    <span className="divider"/>
                    <input type="text" placeholder="Main Game" ref={gameRef}/>
                    <span className="divider"/>
                    <input type="text" placeholder="Location" ref={locationRef}/>
                    <span className="divider"/>
                    <input type="text" placeholder="Age" ref={ageRef}/>
                    <span className="divider"/>
                    <button type="submit">Submit</button>
                 </form> 
                </div>          
             </div>
          </div>
        )}
        {isSubmit && <Register/> }
        </>
        , document.getElementById("addprofile")
    )
}
