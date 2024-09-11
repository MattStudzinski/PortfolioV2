import { useState, useEffect } from 'react';



const StickyNav = ({ show }) => {
    const [activeLink, setActiveLink] = useState('')
    
    useEffect(() => {
        const sectionIds = ['experience', 'skills', 'projects', 'contact']
        const sections = sectionIds.map(id => document.getElementById(id))

        const observer = new IntersectionObserver(
            (entries) => {
                let newActiveLink = ''
                entries.forEach((entry) => {
                    console.log('Entry:', entry)
                    if(entry.isIntersecting) {
                        newActiveLink = entry.target.id
                    }
                })

                if (newActiveLink !== activeLink) {
                    console.log('New Active Link:', newActiveLink)
                    setActiveLink(newActiveLink)
                }
            },
        {threshold: 0.5 }
        )

        sections.forEach((section) => {
            if (section) observer.observe(section)
        })

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section)
            })
        }
    }, [activeLink])

    useEffect(() => {
        console.log('Active Link:', activeLink); // Log activeLink on each update
    }, [activeLink]);
    
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