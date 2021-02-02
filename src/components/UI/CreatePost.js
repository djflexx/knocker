import React,{useState, useEffect,useContext} from 'react'
import './CreatePost.css'
import axios from 'axios'
import {UserContext} from '../../context/UserContext'
import {useAuth} from '../../context/AuthContext'

export default function CreatePost() {
    const Users = useContext(UserContext)
    const [activeUser, setActiveUser] = useState({})
    const {currentUser} = useAuth()
    useEffect(()=> {
        if(Users.length > -1){
            Users.map(u => {
                if(u.email === currentUser.email){
                    return setActiveUser(u)
                }
            })
        }
    },[Users])
    return (
        <div className="create-post-cont">
            <form method="post">
              
            </form>
        </div>
    )
}
