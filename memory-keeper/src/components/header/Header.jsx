import React from 'react';
import icon from '../../assets/pet.png'; // aqui corrigido
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img
                src={icon}
                alt="Pet image"
            />
        </div>
    );
}

export default Header;
