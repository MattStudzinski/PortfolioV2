import React from 'react';
import { Parallax } from 'react-parallax';
import Asteroid1 from '../svg/Asteroid1';
import Asteroid2 from '../svg/Asteroid2';
import Asteroid3 from '../svg/Asteroid3';
import Asteroid4 from '../svg/Asteroid4';
import Asteroid5 from '../svg/Asteroid5';
const Skills = () => {
    return (
        <section className='skills'>
        <div className='skills__container'>
            <Parallax
                className='skills__parallax'
                blur={1}
                bgImage=""
                bgImageAlt="background"
                strength={500} // Adjust strength for parallax effect
            >
                <div className='skills__asteroid-container'>
                    <div className='skills__asteroid skills__asteroid--1'>
                        <Asteroid1 />
                    </div>
                    <div className='skills__asteroid skills__asteroid--2'>
                        <Asteroid2 />
                    </div>
                    <div className='skills__asteroid skills__asteroid--3'>
                        <Asteroid3 />
                    </div>
                    <div className='skills__asteroid skills__asteroid--4'>
                        <Asteroid4 />
                    </div>
                    <div className='skills__asteroid skills__asteroid--5'>
                        <Asteroid5 />
                    </div>
                </div>
            </Parallax>
        </div>
    </section>
    );
};

export default Skills;
