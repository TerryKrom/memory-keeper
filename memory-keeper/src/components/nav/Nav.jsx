import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <div className="nav">
            <ul className="nav-icons">
                <li><i className="fa fa-image"></i></li>
                <li><i className="fa fa-comments"></i></li>
                <li><i className="fa fa-music"></i></li>
            </ul>
        </div>
    );
}

export default Nav;
