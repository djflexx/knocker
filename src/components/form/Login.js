import React from 'react'
import './Login.css'
import ReactDOM from 'react-dom';

export default function Login() {
    return ReactDOM.createPortal(
        <div className="login-cont">
            <p>Login works</p>
        </div>, 
        document.getElementById("login"))
}
