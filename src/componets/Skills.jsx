import React from 'react';
import Asteroid1 from '../svg/Asteroid1';
import Css from '../svg/Css';
import Asteroid2 from '../svg/Asteroid2';
import Asteroid3 from '../svg/Asteroid3';
import Asteroid4 from '../svg/Asteroid4';
import Asteroid5 from '../svg/Asteroid5';
const Skills = () => {
    return (
        <section className='skills'>
            <div className='skills-container'>
                {/* Container for the asteroid and CSS */}
                <div className='skills-asteroid-container'>
                    {/* Asteroid SVG */}
                    <Asteroid1 />
                    <Asteroid2 />
                    <Asteroid3 />
                    <Asteroid4 />
                    <Asteroid5 />

                    
                </div>
            </div>
        </section>
    );
};

export default Skills;
