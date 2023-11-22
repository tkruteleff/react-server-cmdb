import { useState } from 'react';
import './Navigation.css'

const Navigation = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className='navigation'>
            <div className='navigation-dropdown'>
                <button className='navigation-dropdown-button'>
                    ASSETS
                </button>
                <div class="navigation-dropdown-content">
                    <a href="/assets/servers">Servers</a>
                    <a href="/assets/networks">Networks</a>
                    <a href="/assets/other">Other</a>
                </div>
            </div>
            <a href="/users">USERS</a>
            {loggedIn ? <a href="/admin">ADMIN</a> : null}
            <a href="/login">LOGIN</a>
        </div>
    );
};

export default Navigation;