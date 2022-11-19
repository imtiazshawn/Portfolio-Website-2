import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import Logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to='home' smooth={true} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link to='about' smooth={true} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link to='skills' smooth={true} duration={500}>Skills</Link>
                    </li>
                    <li>
                        <Link to='work' smooth={true} duration={500}>Work</Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
    )
}

export default Navbar
