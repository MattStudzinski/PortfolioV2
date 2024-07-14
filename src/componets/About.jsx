import React from 'react';

const About = () => {
    return (
        <section className='about'>
            <div className='about__container'>
                <h1 className='about__name'>
                    Hi, I'm Matthew!
                </h1>
                <h2 className='about__title'>
                    Your Next<p className='about__role'>&nbsp;Full Stack </p> &nbsp;Developer.
                </h2>
                <p className='about__bio'> Welcome to my portfolio! Driven by a deep passion for coding, I craft tech solutions that tackle real-world challenges. Beyond programming, I'm fascinated by cars and enjoy exploring new culinary adventures. Let's innovate together!</p>
                <div className='about__navigation'>
                    <a href='#' className='about__navigation-link'>Skills</a>
                    <a className='about__navigation-link'>Experience</a>
                    <a className='about__navigation-link'>Projects</a>
                    <a className='about__navigation-link'>Contact</a>
                </div>
                
            </div>

        </section>
    );
};

export default About;