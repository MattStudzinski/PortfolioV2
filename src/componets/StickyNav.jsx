import {useEffect, useState, useRef} from 'react';



const StickyNav = () => {

    const [isSticky, setIsSticky] = useState(false)
    const navRef = useRef(null)

    useEffect (() => {
        const handleScroll = () => {
            if (navRef.current) {
                setIsSticky (window.scrollY > navRef.current.offsetTop)
            }
        }

        window.addEventListener('scroll', handleScroll) 
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        
    }, [])
    return (
        <div ref={navRef} className={`sticky-navigation ${isSticky ? 'sticky' : ''}`}>
            <a href='#experience' className='sticky-navigation-link'>Experience</a>
            <a href='#skills' className='sticky-navigation-link'>Skills</a>
            <a href='#projects' className='sticky-navigation-link'>Projects</a>
            <a href='#contact' className='sticky-navigation-link'>Contact</a>
        </div>
    );
};

export default StickyNav;