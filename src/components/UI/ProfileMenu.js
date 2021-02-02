import React,{useContext, useEffect, useState} from 'react'
import Logout from '../form/Logout'
import './ProfileMenu.css'
import {UserContext} from '../../context/UserContext'
import {useAuth} from '../../context/AuthContext'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom'


export default function ProfileMenu(props) {
    const Users = useContext(UserContext)
    const [activeUser, setActiveUser] = useState({})
    const {currentUser} = useAuth()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

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
        <div className="menu-cont">
        <div className="menu-button">
        <Button 
        aria-controls="simple-menu" 
        aria-haspopup="true"
        variant="contained"
        color="default"
        onClick={handleClick}
        startIcon={<AccountCircleIcon/>}
        >
            {activeUser.userId}
        </Button>
        </div>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><Link to={`${props.url}/${activeUser.userId}`}>Profile</Link></MenuItem>
              <MenuItem onClick={handleClose}><Logout /></MenuItem>
            </Menu>
        </div>
    )
}
