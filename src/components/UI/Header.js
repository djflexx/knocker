import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import  ProfileMenu  from './ProfileMenu'


export default function Header(props) {
    return (
        <div className="header-cont">
            <div className="home-logo">
            <Link to="/home"><img src="https://www.dropbox.com/s/a3bq2gkiidyy715/IMG-0339.PNG?raw=1" alt="logo"></img></Link>
            </div>
            <ProfileMenu url={props.url}/>
        </div>
    )
}
