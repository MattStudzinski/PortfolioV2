import { useEffect, useState, useRef } from "react";
import About from "./About";
import Navbar from "./Navbar";
import StickyNav from "./StickyNav"



const Header = () => {

    const aboutRef = useRef(null)
    const [showStickyNav, setShowStickeyNav] = useState(false)

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.4,
        };
    
        // Capture the current ref value
        const element = aboutRef.current;
    
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    setShowStickeyNav(true);
                } else {
                    setShowStickeyNav(false);
                }
            });
        };
    
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
        if (element) {
            observer.observe(element);
        }
    
        // Cleanup function
        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);
    return (
        <section className='header'>
            <StickyNav show={showStickyNav} />
            <Navbar />
            <section id= "about" ref={aboutRef} className="about">
            <About />
            </section>
        </section>
    );
};

export default Header;