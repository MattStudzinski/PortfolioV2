import React from 'react';
import Github from '../svg/Github';
import Linkedin from '../svg/Linkedin';

const Navbar = () => {
    return (
        <section className='nav-bar'>
            <nav className='nav-bar__links'>
                <a href= 'https://www.linkedin.com/in/mattstudzinski' target='_blank' rel='noopener noreferrer'> <Linkedin /> </a>
                <a href='https://github.com/MattStudzinski' target='_blank' rel='noopener noreferrer'> <Github /> </a>
                
            </nav>
        </section>
    );
};

export default Navbar;