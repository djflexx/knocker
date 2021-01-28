import React, {useRef, useState} from 'react'
import './Login.css'
import ReactDOM from 'react-dom';
import {useAuth} from '../../context/AuthContext'

export default function Register() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {Login, currentUser} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e){
    e.preventDefault()
    try {
        setError('')
        setLoading(true)
    await Login(emailRef.current.value, passwordRef.current.value)
    }catch {
        setError("Failed To Login To Your Account")
    }
    setLoading(false)
    }

    return ReactDOM.createPortal(
        <div className="login-cont">
            <div className="small-login-cont">
                <div className="form-cont">
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Email"  required ref={emailRef}/>
                            <span className="divider"/>
                        <input type="text" placeholder="Password"  required ref={passwordRef} />
                            <span className="divider"/>
                        <span className="divider"/>
                        <button disabled={loading} type="submit" className="form-button">Login</button>
                    </form>
                </div>
            {error && <div className="error"> 
               <h4>{error}</h4>
            </div>}
            </div>
        </div>, 
        document.getElementById("login"))
}
