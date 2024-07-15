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
                    blur={0}
                    bgImage=""
                    bgImageAlt="background"
                    strength={200}
                >
                    <div className='skills__asteroid-container'>
                        <div className='skills__asteroid'>
                            <Asteroid1 />
                        </div>
                        <div className='skills__asteroid'>
                            <Asteroid2 />
                        </div>
                        <div className='skills__asteroid'>
                            <Asteroid3 />
                        </div>
                        <div className='skills__asteroid'>
                            <Asteroid4 />
                        </div>
                        <div className='skills__asteroid'>
                            <Asteroid5 />
                        </div>
                    </div>
                </Parallax>
            </div>
        </section>
    );
};

export default Skills;
