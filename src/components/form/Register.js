import React from 'react'
import './Register.css'
import ReactDOM from 'react-dom';

export default function Register() {
    return ReactDOM.createPortal(
        <div className="register-cont">
            <p>register works</p>
        </div>, document.getElementById("register")
    )
}
