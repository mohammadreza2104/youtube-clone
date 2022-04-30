import React from 'react';
import './recommendedVideos.css'
import VideoCard from "./VideoCard";

const RecommendedVideos = () => {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos_videos">
                <VideoCard title="Marvel Studios' Doctor Strange in the Multiverse of Madness | Illuminati"
                           views="2.3M views" timestamp="16 hours ago" channel="Marvel Entertainment"
                           image="https://i.ytimg.com/vi/Ne7y9_AbBsY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtAfwZZIFm8AZVBTGTesw97Zteiw"
                           channelImage="https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard title="Which 16 Gaming Laptop in 2022? Legion 5i Pro vs Zephyrus M16" views="53K views"
                           timestamp="3 days ago" channel="Jarrod'sTech"
                           image="https://i.ytimg.com/vi/O_tXoi4tHsI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWD7tYYUtETwE8UCUtnXZuG3AJCg"
                           channelImage="https://yt3.ggpht.com/ytc/AKedOLQHi6TAHmHUwAqdCwj_3688KLEHkXxYEhUvnuv1Kg=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard title="Learning Functional Programming with JavaScript - Anjana Vakil -" views="2.6M views"
                           timestamp="5 years ago" channel="JSConf"
                           image="https://i.ytimg.com/vi/e-5obm1G_FY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6OCGkWK0HrjhUh0irTDKSgG09cg"
                           channelImage="https://yt3.ggpht.com/ytc/AKedOLSUOEQunmzvzQOeAWEorFZiXGHQ6LEMMR02wzNQ9w=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard title="Build a Discord clone with REACT.JS for beginners!" views="127K views"
                           timestamp="1 years ago" channel="Clever Programmer"
                           image="https://i.ytimg.com/vi/zc1loX80TX8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9Hhky-IPANyPItswTPFIqOJqD0Q"
                           channelImage="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard title="God of War Series - How Kratos got all the Weapons and Powers" views="1.2M views"
                           timestamp="5 months ago" channel="Prototype93D"
                           image="https://i.ytimg.com/vi/WlXet61JfSI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiwMdLlgV5eM41fq3TMIz4gyC9AQ"
                           channelImage="https://yt3.ggpht.com/ytc/AKedOLQPojj6UAI90PcKQIdKeB_5apC20lDd25p_UVuowQ=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard title="Beginner React.js Coding Interview (ft. Clément Mihailescu)" views="1.3M views" timestamp="1 years ago" channel="Ben Awad"
                           image="https://i.ytimg.com/vi/gnkrDse9QKc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoDnSQLVfrPJctUTFE3zuY020o_w"
                           channelImage="https://yt3.ggpht.com/ytc/AKedOLScd3qE7Blu2CtRbzkfBzbEwE3_bIpO-dRaQjTPTg=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard title="How to Build a Cable-Free Desk with Built-In Lights, USB, Outlets + More!" views="3.9M views" timestamp="3 months ago" channel="Phil Vandelay"
                           image="https://i.ytimg.com/vi/NqjKpE7bdXc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNTWQPug48r4wZBoIvCpfvcdE79Q"
                           channelImage="https://yt3.ggpht.com/ytc/AKedOLS_YKplJCwvHhHlI-XFINPYeQ4vijvCEdaPsAmfJA=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard title="Beginner React.js Coding Interview (ft. Clément Mihailescu)" views="1.3M views" timestamp="1 years ago" channel="Ben Awad"
                           image="https://i.ytimg.com/vi/gnkrDse9QKc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoDnSQLVfrPJctUTFE3zuY020o_w"
                           channelImage="https://yt3.ggpht.com/ytc/AKedOLScd3qE7Blu2CtRbzkfBzbEwE3_bIpO-dRaQjTPTg=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard title="How to Build a Cable-Free Desk with Built-In Lights, USB, Outlets + More!" views="3.9M views" timestamp="3 months ago" channel="Phil Vandelay"
                           image="https://i.ytimg.com/vi/NqjKpE7bdXc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNTWQPug48r4wZBoIvCpfvcdE79Q"
                           channelImage="https://yt3.ggpht.com/ytc/AKedOLS_YKplJCwvHhHlI-XFINPYeQ4vijvCEdaPsAmfJA=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard title="Learning Functional Programming with JavaScript - Anjana Vakil -" views="2.6M views"
                           timestamp="5 years ago" channel="JSConf"
                           image="https://i.ytimg.com/vi/e-5obm1G_FY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6OCGkWK0HrjhUh0irTDKSgG09cg"
                           channelImage="https://yt3.ggpht.com/ytc/AKedOLSUOEQunmzvzQOeAWEorFZiXGHQ6LEMMR02wzNQ9w=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard title="Build a Discord clone with REACT.JS for beginners!" views="127K views"
                           timestamp="1 years ago" channel="Clever Programmer"
                           image="https://i.ytimg.com/vi/zc1loX80TX8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9Hhky-IPANyPItswTPFIqOJqD0Q"
                           channelImage="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard title="God of War Series - How Kratos got all the Weapons and Powers" views="1.2M views"
                           timestamp="5 months ago" channel="Prototype93D"
                           image="https://i.ytimg.com/vi/WlXet61JfSI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiwMdLlgV5eM41fq3TMIz4gyC9AQ"
                           channelImage="https://yt3.ggpht.com/ytc/AKedOLQPojj6UAI90PcKQIdKeB_5apC20lDd25p_UVuowQ=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard title="Beginner React.js Coding Interview (ft. Clément Mihailescu)" views="1.3M views" timestamp="1 years ago" channel="Ben Awad"
                           image="https://i.ytimg.com/vi/gnkrDse9QKc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoDnSQLVfrPJctUTFE3zuY020o_w"
                           channelImage="https://yt3.ggpht.com/ytc/AKedOLScd3qE7Blu2CtRbzkfBzbEwE3_bIpO-dRaQjTPTg=s68-c-k-c0x00ffffff-no-rj"
                />
            </div>
        </div>
    );
};

export default RecommendedVideos;