import React from 'react';
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home"
import {
    Subscriptions,
    VideoLibrary,
    Whatshot,
    History,
    OndemandVideo,
    WatchLater,
    ThumbDownAltOutlined, ExpandMoreOutlined
} from "@material-ui/icons";
import './sidebar.css'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={Whatshot} title="Trending"/>
            <SidebarRow Icon={Subscriptions} title="Subscription"/>
            <hr/>
            <SidebarRow Icon={VideoLibrary} title="Library"/>
            <SidebarRow Icon={History} title="History"/>
            <SidebarRow Icon={OndemandVideo} title="Your videos"/>
            <SidebarRow Icon={WatchLater} title="Watch Later"/>
            <SidebarRow Icon={ThumbDownAltOutlined} title="Liked videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Show more"/>
            <hr/>
        </div>
    );
};

export default Sidebar;