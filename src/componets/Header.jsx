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
            threshold: .2,
        }

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    setShowStickeyNav(true)
                } else {
                    setShowStickeyNav(false)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersection, observerOptions)
        if(aboutRef.current) {
            observer.observe(aboutRef.current)
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current)
            }
        }
    }, [])
    return (
        <section className='header'>
            {showStickyNav && <StickyNav />}
            <Navbar />
            <section id= "about" ref={aboutRef} className="about">
            <About />
            </section>
        </section>
    );
};

export default Header;