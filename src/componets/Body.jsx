import React from 'react';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

const Body = () => {
    return (
        <section className='body'>
            <Experience />
            <Skills />
            <Projects />
            
        </section>
    );
};

export default Body;