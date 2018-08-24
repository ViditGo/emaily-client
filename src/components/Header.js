import React from 'react';

class Header extends React.Component {
    render(){
        return (
            <nav>
            <div className="nav-wrapper">
            <a className="left brand-logo">
                Emaily
            </a>
                <ul className="right">
                    <li>
                        <a href="/api/user_login_auth">Sign in with Google</a>
                    </li>
                </ul>
            </div>
            </nav>
        )
    }
}

export default Header;