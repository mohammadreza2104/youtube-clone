import React from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar";


const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon/>
                <img
                    className="header_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
                    alt="youtube"
                />
            </div>
            <div className="header_input">
                <input placeholder="Search" type="text"/>
                <SearchIcon className="header_inputButton"/>
            </div>
            <div className="header_icons">
                <VideoCallIcon className="header_icon" />
                <AppsIcon className="header_icon"/>
                <NotificationsIcon className="header_icon"/>
                <Avatar src="https://avatars.githubusercontent.com/u/102020506?v=4" alt="mohammadreza nourali"/>
            </div>

        </div>
    );
};

export default Header;