import React from 'react';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const Body = () => {

    
    return (
        <section className='body'>
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            
        </section>
    );
};

export default Body;