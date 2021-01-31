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

     async function handleSubmit(e){
        e.preventDefault();
       try  { await 
            axios({
            method:"post",
            url:"https://cors-anywhere.herokuapp.com/https://lit-everglades-62200.herokuapp.com/addknockeruser",
            data: {
                userid: `${useridRef.current.value}`,
                game: `${gameRef.current.value}`,
                location: `${locationRef.current.value}`,
                age: `${ageRef.current.value}`
            }
        })
    } catch(err){
        console.log(err)
    }
    setIsSubmitted(true)

    }
    return ReactDOM.createPortal(
        <>
        {!isSubmit && (
        <div className="create-profile-cont">
          <div className="small-register-cont">
             <div className= "form-cont">
                 <form method="POST" onSubmit={handleSubmit}>
                    <input type="text" placeholder="User Name" ref={useridRef}/>
                    <span className="divider"/>
                    <input type="text" placeholder="Main Game" ref={gameRef}/>
                    <span className="divider"/>
                    <input type="text" placeholder="Location" ref={locationRef}/>
                    <span className="divider"/>
                    <input type="text" placeholder="Age" ref={ageRef}/>
                    <span className="divider"/>
                    <button type="submit"></button>
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
