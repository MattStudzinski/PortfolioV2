import React from 'react';
import { useInView } from 'react-intersection-observer';
import Asteroid1 from '../svg/Asteroid1';
import Asteroid2 from '../svg/Asteroid2';
import Asteroid3 from '../svg/Asteroid3';
import Asteroid4 from '../svg/Asteroid4';
import Asteroid5 from '../svg/Asteroid5';

const Skills = () => {
    const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref4, inView4] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref5, inView5] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section className='skills'>
            <div className='skills__container'>
                <div className='skills__asteroid-container'>
                    <div ref={ref1} className={`skills__asteroid  ${inView1 ? 'skills__asteroid--1' : ''}`}>
                        <Asteroid1 />
                    </div>
                    <div ref={ref2} className={`skills__asteroid  ${inView2 ? 'skills__asteroid--2' : ''}`}>
                        <Asteroid2 />
                    </div>
                    <div ref={ref3} className={`skills__asteroid  ${inView3 ? 'skills__asteroid--3' : ''}`}>
                        <Asteroid3 />
                    </div>
                    <div ref={ref4} className={`skills__asteroid  ${inView4 ? 'skills__asteroid--4' : ''}`}>
                        <Asteroid4 />
                    </div>
                    <div ref={ref5} className={`skills__asteroid ${inView5 ? 'skills__asteroid--5' : ''}`}>
                        <Asteroid5 />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
