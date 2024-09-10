import { useState, useEffect, useRef } from 'react';



const StickyNav = ({ show }) => {
    const [activeLink, setActiveLink] = useState('')
    const sectionsRef = useRef({})

    useEffect(() => {
        const sectionElements = Object.values(sectionsRef.current)

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log(`Intersecting section: ${entry.target.id}`)
                    setActiveLink(entry.target.id)
                }
            })
        }, {threshold: 0.5})

        sectionElements.forEach((section) => {
            if (section) observer.observe(section)
        })

    return () => {
        sectionElements.forEach((section) => {
            if (section) observer.unobserve(section)
        })
    }
    }, [])

    
    const handleClick = (id) => {
        setActiveLink(id)
        document.getElementById(id).scrollIntoView({ behavior: 'smooth'})
    }
    return (
        <div className={`sticky-navigation ${show ? 'visible' : 'hidden'}`}>
            <a 
            href='#experience' 
            className={`sticky-navigation-link ${activeLink === 'experience' ? 'active' : ''}`}
            onClick={() => handleClick('experience')}
            >
                Experience
            </a>
            <a
            href='#skills' 
            className={`sticky-navigation-link ${activeLink === 'skills' ? 'active' : ''}`}
            onClick={() => handleClick('skills')}
            >
                Skills
            </a>
            <a
            href='#projects' 
            className={`sticky-navigation-link ${activeLink === 'projects' ? 'active' : ''}`}
            onClick={() => handleClick('projects')}
            >
                Projects
            </a>
            <a
            href='#contact' 
            className={`sticky-navigation-link ${activeLink === 'contact' ? 'active' : ''}`}
            onClick={() => handleClick('contact')}
            >
                Contact
            </a>
        </div>
    );
};

export default StickyNav;