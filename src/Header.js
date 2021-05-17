import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import Forum from '@material-ui/icons/Forum';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import ExpandMoren from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { Avatar, IconButton } from '@material-ui/core'
import { useStateValue } from './StateProvider';
const Header = () => {
    const [{ user }, dispatch] = useStateValue()

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
                    alt="" />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>
            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large"/> 
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large"/> 
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large"/> 
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large"/> 
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large"/> 
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <Forum />
                </IconButton>
                <IconButton>
                    <NotificationsActive />
                </IconButton>
                <IconButton>
                    <ExpandMoren />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
