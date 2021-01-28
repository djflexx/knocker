import React, {useRef, useState} from 'react'
import './Register.css'
import ReactDOM from 'react-dom';
import {useAuth} from '../../context/AuthContext'
import { Redirect } from 'react-router-dom';

export default function Register() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {Register} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)


    async function handleSubmit(e){
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError("Passwords Do Not Match")
    }
    try {
        setError('')
        setLoading(true)
    await Register(emailRef.current.value, passwordRef.current.value)
    }catch {
        setError("Failed To Create An Account")
    }
    setLoading(false)
    setIsSubmitted(true)
    }

    return ReactDOM.createPortal(
        <div className="register-cont">
            <div className="small-register-cont">
                <div className="form-cont">
                   <form autoComplete="off" onSubmit={handleSubmit}>
                       <input type="text" placeholder="Email"  required ref={emailRef}/>
                         <span className="divider"/>
                       <input type="text" placeholder="Password"  required ref={passwordRef}/>
                         <span className="divider"/>
                       <input type="text" placeholder="Password Confirmation" required ref={passwordConfirmRef}/>
                         <span className="divider"/>
                       <button disabled={loading} type="submit">Register</button>
                   </form>
                </div>
            {error && <div className="error"> 
               <h4>{error}</h4>
            </div>}
            {isSubmitted && <Redirect to="/profile"/>}
            </div>
        </div>, document.getElementById("register")
    )
}
