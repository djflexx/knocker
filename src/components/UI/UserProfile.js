import React,{useContext, useEffect, useState} from 'react'
import './UserProfile.css'
import {useParams} from 'react-router-dom'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {UserContext} from '../../context/UserContext'
import UserProfileInfo from './UserProfileInfo';

export default function UserProfile() {
    const {activeUser} = useParams();
    const [User, setUser] = useState({})
    const Users = useContext(UserContext)
    useEffect(()=> {
        if(Users.length > -1){
            Users.map(u => {
                if(activeUser === u.userId){
                    return setUser(u)
                }
            })
        }
    },)
    return (
        <div className="profile-container">
         <div className= "profile-title">
            <AccountBoxIcon/>
            <h3>{activeUser}</h3>
         </div>
         <UserProfileInfo user={User}/>
        </div>
    )
}
