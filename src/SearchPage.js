import React from 'react';
import {TuneOutlined} from "@material-ui/icons";
import './searchPage.css'
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlined/>
                <h2>Filter</h2>
            </div>
            <hr/>
            <ChannelRow
                image="https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s68-c-k-c0x00ffffff-no-rj"
                channel="hello"
                verified
                subs="660K"
                noOfVideo={382}
                description="hello I am mohammadreza nourali this clone project
                 hello I am mohammadreza nourali this clone project
                  hello I am mohammadreza nourali this clone project
                   hello I am mohammadreza nourali this clone project"
            />
            <hr/>
            <VideoRow
                views="1.4M"
                subs="660K"
                descriptions="fhjdkjfjfkkjfj fjkdehnf ikjdikw"
                timestamp="56 seconds ago"
                channel="marvel"
                title="how to become programmer"
                image="https://i.ytimg.com/vi/e-5obm1G_FY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6OCGkWK0HrjhUh0irTDKSgG09cg"
            />
        </div>
    );
};

export default SearchPage;