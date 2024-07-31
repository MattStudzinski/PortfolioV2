import {useEffect, useState, useRef} from 'react';



const StickyNav = ({ show }) => {
    const navRef = useRef(null)

    
    return (
        <div ref={navRef} className={`sticky-navigation ${show ? 'visible' : 'hidden'}`}>
            <a href='#experience' className='sticky-navigation-link'>Experience</a>
            <a href='#skills' className='sticky-navigation-link'>Skills</a>
            <a href='#projects' className='sticky-navigation-link'>Projects</a>
            <a href='#contact' className='sticky-navigation-link'>Contact</a>
        </div>
    );
};

export default StickyNav;