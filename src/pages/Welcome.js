import React, { useState } from 'react'
import './Welcome.css'
import Login from '../components/form/Login'
import Backdrop from '../components/form/Backdrop'
import Profile from '../components/form/Profile'


export default function Welcome() {
    const [clickedItem, setClickedItem] = useState('')
    const [isClicked, setIsClicked] = useState(false)
    
    
    const handleClick = (event) => {
        setIsClicked(prevState => !prevState)
        setClickedItem(event.target.innerText)
        }

    return (
        <div className="welcome-container">
          <div className="welcome-background">
          </div>
          <div className="welcome-logo">
            <img src="https://www.dropbox.com/s/a3bq2gkiidyy715/IMG-0339.PNG?raw=1" alt="logo"></img>
          </div>
          <div className="welcome-description">
             <p>
             Need one more player to complete your party?<br />
             Or just dont want to play on your own?<br />
             Either way, It's an easy fix!<br />
             Search/Create a post - and find awesome new teamates<br />
             </p>
          </div>
          <div className="login-register">
              {isClicked && <div onClick={() => setIsClicked(false)}><Backdrop /></div>}
              <div className="login" onClick={handleClick}>Login</div>
              <div className="register" onClick={handleClick}>Register</div>
              {isClicked && clickedItem === "Login" && <Login setIsClicked={setIsClicked}/> }
              {isClicked && clickedItem === "Register" && <Profile />} 
          </div>
        </div>
    )
}
