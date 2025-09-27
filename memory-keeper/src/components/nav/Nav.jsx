import React from 'react';
import './Nav.css';
import image from '../../assets/image.svg';
import message from '../../assets/message.svg';
import music from '../../assets/music.svg';

const Nav = () => {
    return (
        <div className="nav">
            <ul className="nav-icons">
                <li><img src={image} alt="Image" /></li>
                <li><img src={message} alt="Message" /></li>
                <li><img src={music} alt="Music" /></li>
            </ul>
        </div>
    );
}

export default Nav;
