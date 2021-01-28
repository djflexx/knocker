import React from 'react'
import {useAuth} from '../context/AuthContext'

export default function Profile() {
    const {currentUser} = useAuth()
    return (
        <div>
            <h1>Hello {currentUser.email}</h1>
        </div>
    )
}
