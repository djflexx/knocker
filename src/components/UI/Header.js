import React from 'react'
import { Redirect } from 'react-router-dom'
import './Header.css'
import  Menu  from './Menu'


export default function Header() {
    return (
        <div className="header-cont">
            <div className="home-logo" onClick={() => <Redirect to="/home"/>}>
                <img src="https://www.dropbox.com/s/a3bq2gkiidyy715/IMG-0339.PNG?raw=1" alt="logo"></img>
            </div>
            <Menu />
        </div>
    )
}
