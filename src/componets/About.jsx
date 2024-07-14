import React from 'react';

const About = () => {
    return (
        <section className='about'>
            <div className='about__container'>
                <h1 className='about__name'>
                    Hi, Im Matthew!
                </h1>
                <h2 className='about__title'>
                    Your Next<p className='about__role'>&nbsp;Full Stack </p> &nbsp;Developer.
                </h2>
                <div className='about__navigation'>
                    <a href='#' className='about__navigation-link'>About</a>
                    <a className='about__navigation-link'>Skills</a>
                    <a className='about__navigation-link'>Projects</a>
                    <a className='about__navigation-link'>Contact</a>
                </div>
                
            </div>

        </section>
    );
};

export default About;