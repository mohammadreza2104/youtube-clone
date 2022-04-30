import React from 'react';
import './videoRow.css'

const VideoRow = ({views, subs, descriptions, timestamp, channel, title, image}) => {
    return (
        <div className="videoRow">
            <img src={image} alt=""/>
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p className="videoRow_headline">{channel} . <span className="videoRow_subs"><span className="videoRow_subsNumber">{subs}</span>  subscribers </span> {views} views
                    . {timestamp}</p>
                <p className="videoRow_description">{descriptions}</p>
            </div>

        </div>
    );
};

export default VideoRow;