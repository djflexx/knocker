import React from 'react'
import CreatePost from '../components/UI/CreatePost'
import Post from '../components/UI/Post'
import './Parties.css'
export default function Parties() {
    return (
        <div className="parties-cont">
        <h2>Knock On Someone's Door</h2>
        <p>Fun And Great Players Are Inside</p>
        <div className="post-and-create-cont">
            <Post />
            <CreatePost />
        </div>
        </div>
    )
}
