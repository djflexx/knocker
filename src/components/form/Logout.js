import React,{useState} from 'react'
import './Logout.css'
import {useAuth} from '../../context/AuthContext'
import Alert from '@material-ui/lab/Alert';

export default function Logout() {
    const {Logout} = useAuth();
    const [error, setError] = useState('')
    async function handleLogOut(){
        setError('')
    try{
        await Logout()
    }catch{
        setError("Failed to logout")
    }
    }
    return (
        <div className="logout">
            <a onClick={handleLogOut}>Logout</a>
            {error !== '' && <Alert severity="error">{error}</Alert>}
        </div>
    )
}
