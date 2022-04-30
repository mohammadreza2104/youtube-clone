import React from 'react';
import './channelRow.css'
import Avatar from "@material-ui/core/Avatar";
import {VerifiedUser} from "@material-ui/icons";

const ChannelRow = ({image, noOfVideo, verified, subs, channel, description}) => {
    return (
        <div className="channelRow">
            <Avatar className="channelRow_logo" src={image} alt={channel}/>
            <div className="channelRow_text">
                <h4>{channel} {verified && <VerifiedUser/>}</h4>
                <p>{subs} subscribers . {noOfVideo} videos</p>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default ChannelRow;