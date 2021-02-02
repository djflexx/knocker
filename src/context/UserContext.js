import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {useAuth} from './AuthContext'

export const UserContext = React.createContext();

export  function UserProvider(props) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(process.env.REACT_APP_ALL_USERS)
        .then(res => setUsers(res.data))
        .catch(err => {console.log(err)});
    },[])
    return (
       <UserContext.Provider value={users}>
            {props.children}
       </UserContext.Provider> 
            
    )
}
