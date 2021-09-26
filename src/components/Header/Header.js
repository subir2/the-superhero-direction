import React from 'react';
import'./Header.css';

const Header = () => {
    return (
        <div className="header">
           <marquee width="100%" direction="left" height="100px"><span>Real-Time Billionaires</span></marquee>
        </div>
    );
};

export default Header;