import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo">
                    Logo <i className="fa-solid fa-gem"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' onClick={closeMobileMenu} className='nav-links' >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' onClick={closeMobileMenu} className='nav-links' >
                            Services
                        </Link>
                    </li>
                    <li className='products'>
                        <Link to='/' onClick={closeMobileMenu} className='nav-links' >
                            Services
                        </Link>
                    </li>
                    <li className='signup'>
                        <Link to='/' onClick={closeMobileMenu} className='nav-links-mobile' >
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>    
    )
}

export default Navbar