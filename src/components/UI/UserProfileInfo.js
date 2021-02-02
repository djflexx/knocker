import React, {useEffect, useState} from 'react'
import './UserProfile.css'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      margin: '20px auto',
      maxWidth: 500,
      backgroundColor: theme.palette.background.paper,
    },
  }));


export default function UserProfileInfo(props) {
    const [friends, setFriends] = useState(0)
    useEffect(() => {
    if(props.user.friends === undefined){
        setFriends(0)
        if(props.user.friends !== undefined){
            setFriends(props.user.friends.length)
        }
      }  
    }, [props.user.friends])
    const classes = useStyles()
    return (
    <div className={classes.root}>
    <List component="nav" aria-label="main">
        <ListItem button>
          <ListItemText 
          primary={`User Name:`} 
          secondary={`${props.user.userId}`}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit">
                <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemText 
          primary={`Email:`}
          secondary={`${props.user.email}`} 
          />
        </ListItem>
        <ListItem button>
          <ListItemText 
          primary={`Primary Game:`} 
          secondary={`${props.user.game}`}    
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit">
                <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemText 
          primary={`Country:`} 
          secondary={`${props.user.location}`}
          />
        </ListItem>
        <ListItem button>
          <ListItemText primary={`Age:`} 
              secondary={`${props.user.age}`}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit">
                <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemText 
          primary={`Kncoker Rating:`}   
          />
        </ListItem>
        <ListItem button>
          <ListItemText 
          primary={`Friends:`} 
          secondary={`${friends}`}
          />
        </ListItem>
    </List>
    </div>
    )
}
