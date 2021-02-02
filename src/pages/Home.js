import React from 'react'
import './Home.css'
import {UserProvider} from '../context/UserContext'
import Header from '../components/UI/Header'
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import UserProfile from '../components/UI/UserProfile'
import Parties from './Parties'

export default function Home() {
    const { path, url } = useRouteMatch();
    return (
        <UserProvider>
        <div className="home-container">
            <Header url={url}/>
            <Parties />
        </div>
        <Switch>
           <Route exact path={path}>
           </Route>
           <Route exact path={`${path}/:activeUser`}>
              <UserProfile />
           </Route>
        </Switch>
        </UserProvider>
    )
}
