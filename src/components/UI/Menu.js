import React from 'react'
import Logout from '../form/Logout'
import './Menu.css'
import {useAuth} from '../../context/AuthContext'


export default function Menu() {
    const {currentUser} = useAuth();
    return (
        <div className="menu-cont">
            <p>{currentUser.email}</p>
            <span className="divider-menu"/>
            <Logout />
        </div>
    )
}
