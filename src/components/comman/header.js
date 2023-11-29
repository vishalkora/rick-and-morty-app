// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='d-flex justify-content-center'>
            <nav>
                <ul>
                    <li className='mx-3 f40'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='mx-3'>
                        <Link to="/location">Locations</Link>
                    </li>
                    <li className='mx-3'>
                        <Link to="/episodes">Episodes</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
