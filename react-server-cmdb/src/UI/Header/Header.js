import React from 'react';

import './Header.css';
import Navigation from './Navigation/Navigation';

const Header = (props) => {
    return (
        <header className='header'>
            <h1>IT CMDB tool for IT admins</h1>
            <Navigation />
        </header>
    )
};

export default Header;
