import { useState } from 'react';
import './Navigation.css'

const Navigation = () => {
    const [loggedIn, setLoggedIn] = useState(true);

    return (
        <div className='navigation'>
            <div className='navigation-dropdown'>
                <button className='navigation-dropdown-button'>
                    ASSETS
                </button>
                <div className="navigation-dropdown-content">
                    <a href="/assets/servers">Servers</a>
                    <a href="/assets/networks">Networks</a>
                    <a href="/assets/other">Other</a>
                </div>
            </div>
            <div className='navigation-dropdown'>
                <button className='navigation-dropdown-button'>
                    USERS
                </button>
                <div className="navigation-dropdown-content">
                    <a href="/users/manage">Manage Users</a>
                </div>
            </div>
            {loggedIn ? <div className='navigation-dropdown'>
                <button className='navigation-dropdown-button'>
                    ADMIN
                </button>
                <div className="navigation-dropdown-content">
                    <a href="/settings/">Settings</a>
                </div>
            </div> : null}
            <a href="/login">LOGIN</a>
        </div>
    );
};

export default Navigation;