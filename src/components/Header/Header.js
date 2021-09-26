import React from 'react';
import'./Header.css';

const Header = () => {
    return (
        <div className="header">
           <marquee width="100%" direction="left" behavior="scroll" height="100px"><span className="span1">Forbes World's Top Ten Billionaires List 2021</span></marquee>
           <h2>Total Net Worth 1373 Billion USD</h2>
        </div>
    );
};

export default Header;