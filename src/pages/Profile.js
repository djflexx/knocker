import React, {useRef, useState} from 'react'
import axios from 'axios'
import './Profile.css'
import ReactDOM from 'react-dom';
import Register from '../components/form/Register'


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
            url:"https://lit-everglades-62200.herokuapp.com/addknockeruser",
            data: {
                user: `${useridRef.current.value}`,
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
            <form method="POST" onSubmit={handleSubmit}>
               <input type="text" ref={useridRef}/>
               <input type="text"  ref={gameRef}/>
               <input type="text"  ref={locationRef}/>
               <input type="text"  ref={ageRef}/>
               <button type="submit"></button>
            </form>
        </div>
        )}
        {isSubmit && <Register/> }
        </>
        , document.getElementById("addprofile")
    )
}
