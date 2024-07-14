import React from 'react';
import Github from '../svg/Github';
import Linkedin from '../svg/Linkedin';

const Navbar = () => {
    return (
        <section className='nav-bar'>
            <nav className='nav-bar__links'>
                <Linkedin />
                <Github />
            </nav>
        </section>
    );
};

export default Navbar;