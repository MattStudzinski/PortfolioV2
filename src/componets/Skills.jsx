import React from 'react';
import { useInView } from 'react-intersection-observer';
import CssLogo from '../svg/CssLogo';
import MongoLogo from '../svg/Mongodb';
import Javascript from '../svg/JavascriptLogo';
import ReactLogo from '../svg/React';
import Html from '../svg/HtmlLogo';
import Sass from '../svg/Sass';
import JwtLogo from '../svg/JwtLogo';
import ExpressLogo from '../svg/ExpressLogo';
import NodeLogo from '../svg/NodeLogo';
import PythonLogo from '../svg/PythonLogo';
import PostmanLogo from '../svg/PostmanLogo';
import GitLogo from '../svg/GitLogo';



const Skills = () => {
    const [ref1, inView1] = useInView({ threshold: 1, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 1, triggerOnce: true });
    const [ref3, inView3] = useInView({ threshold: 1, triggerOnce: true });
    const [ref4, inView4] = useInView({ threshold: 1, triggerOnce: true });
    const [ref5, inView5] = useInView({ threshold: 1, triggerOnce: true });
    const [ref6, inView6] = useInView({ threshold: 1, triggerOnce: true });
    const [ref7, inView7] = useInView({ threshold: 1, triggerOnce: true });
    const [ref8, inView8] = useInView({ threshold: 1, triggerOnce: true });

    const [ref9, inView9] = useInView({ threshold: 1, triggerOnce: true });
    const [ref10, inView10] = useInView({ threshold: 1, triggerOnce: true });
    const [ref11, inView11] = useInView({ threshold: 1, triggerOnce: true });
    const [ref12, inView12] = useInView({ threshold: 1, triggerOnce: true });


    return (
        <section id="skills" className='skills'>
        <div className='skills__container'>
            <div className='skills__item-container'>
                <div className='skills__main-skills'>
                    <div ref={ref1} className={`skills__item-large skills__item ${inView1 ? 'skills__item--1 skills__item--inView' : ''}`}>
                        <MongoLogo />
                    </div>
                    <div ref={ref2} className={`skills__item-large skills__item ${inView2 ? 'skills__item--2 skills__item--inView' : ''}`}>
                        <ReactLogo />
                    </div>
                    <div ref={ref3} className={`skills__item-large skills__item ${inView3 ? 'skills__item--3 skills__item--inView' : ''}`}>
                        <ExpressLogo />
                    </div>
                    <div ref={ref4} className={`skills__item-large skills__item ${inView4 ? 'skills__item--4 skills__item--inView' : ''}`}>
                        <NodeLogo />
                    </div>
                </div>
                <div className='skills__secondary-skills'>
                    <div ref={ref5} className={`skills__item-med skills__item ${inView5 ? 'skills__item--5 skills__item--inView' : ''}`}>
                        <Javascript />
                    </div>
                    <div ref={ref6} className={`skills__item-med skills__item ${inView6 ? 'skills__item--6 skills__item--inView' : ''}`}>
                        <CssLogo />
                    </div>
                    <div ref={ref7} className={`skills__item-med skills__item ${inView7 ? 'skills__item--7 skills__item--inView' : ''}`}>
                        <Sass />
                    </div>
                    <div ref={ref8} className={`skills__item-med skills__item ${inView8 ? 'skills__item--8 skills__item--inView' : ''}`}>
                        <JwtLogo />
                    </div>
                    <div ref={ref9} className={`skills__item-med skills__item ${inView9 ? 'skills__item--9 skills__item--inView' : ''}`}>
                        <Html />
                    </div>
                </div>
                <div className='skills__aux-skills'>
                    <div ref={ref10} className={`skills__item-small skills__item ${inView10 ? 'skills__item--10 skills__item--inView' : ''}`}>
                        <PythonLogo />
                    </div>
                    <div ref={ref11} className={`skills__item-small skills__item ${inView11 ? 'skills__item--11 skills__item--inView' : ''}`}>
                        <PostmanLogo />
                    </div>
                    <div ref={ref12} className={`skills__item-small skills__item ${inView12 ? 'skills__item--12 skills__item--inView' : ''}`}>
                        <GitLogo />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Skills;
