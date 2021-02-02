import React, {useRef, useState} from 'react'
import './Register.css'
import ReactDOM from 'react-dom';
import {useAuth} from '../../context/AuthContext'
import Profile from './Profile';

export default function Register() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {Register} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)



    async function handleSubmit(e){
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError("Passwords Do Not Match")
    }
    try {
        setError('')
        setLoading(true)
    await Register(emailRef.current.value, passwordRef.current.value)
    setIsSubmit(true)
    }catch {
        setError("Failed To Create An Account")
    }
    setLoading(false)
    }

    return ReactDOM.createPortal(
        <div className="register-cont">
            <div className="small-register-cont">
             <h2>Two Steps Registretion</h2>
             <p>Step one</p>
             <span className="divider"/>
                <div className="form-cont">
                   <form autoComplete="off" onSubmit={handleSubmit}>
                       <input type="text" placeholder="Email"  required ref={emailRef}/>
                         <span className="divider"/>
                       <input type="password" placeholder="Password"  required ref={passwordRef} minLength="8"/>
                         <span className="divider"/>
                       <input type="password" placeholder="Password Confirmation" required ref={passwordConfirmRef} minLength="8"/>
                         <span className="divider"/>
                       <button disabled={loading} type="submit">Register</button>
                   </form>
                </div>
            {error && <div className="error"> 
               <h4>{error}</h4>
            </div>}
            </div>
            {isSubmit && <Profile />}
        </div>, document.getElementById("register")
    )
}
