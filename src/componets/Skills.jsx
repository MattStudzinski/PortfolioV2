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
    const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref4, inView4] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref5, inView5] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref6, inView6] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref7, inView7] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section className='skills'>
            <div className='skills__container'>
                <div className='skills__item-container'>

                    <div className='skills__main-skills'>
                        
                        <div ref={ref1} className={`skills__item-large  ${inView2 ? 'skills__item--2' : ''}`}>
                            <MongoLogo />
                        </div>
                        <div ref={ref2} className={`skills__item-large  ${inView1 ?       'skills__item--1' : ''}`}>
                            <ReactLogo />
                        </div>
                        <div ref={ref3} className={`skills__item-large  ${inView2 ? 'skills__item--2' : ''}`}>
                            <ExpressLogo />
                        </div>
                        <div ref={ref4} className={`skills__item-large  ${inView2 ? 'skills__item--2' : ''}`}>
                            <NodeLogo />
                        </div>
                        
                    </div>

                    <div className='skills__secondary-skills'>

                        <div ref={ref3} className={`skills__item  ${inView3 ? 'skills__item--3' : ''}`}>
                            <Javascript />
                        </div>

                        <div ref={ref4} className={`skills__item  ${inView4 ? 'skills__item--4' : ''}`}>
                            <CssLogo />
                        </div>

                        <div ref={ref5} className={`skills__item ${inView5 ? 'skills__item--5' : ''}`}>
                            <Sass />
                        </div>

                        <div ref={ref5} className={`skills__item ${inView5 ? 'skills__item--5' : ''}`}>
                            <JwtLogo />
                        </div>

                        <div ref={ref5} className={`skills__item ${inView5 ? 'skills__item--5' : ''}`}>
                            <Html />
                        </div>

                    </div>

                    <div className='skills__aux-skills'>

                    <div ref={ref6} className={`skills__item ${inView6 ? 'skills__item--6' : ''}`}>
                        <PythonLogo />
                    </div>

                    <div ref={ref6} className={`skills__item ${inView6 ? 'skills__item--6' : ''}`}>
                        <PostmanLogo />
                    </div>

                    <div ref={ref6} className={`skills__item ${inView6 ? 'skills__item--6' : ''}`}>
                        <GitLogo />
                    </div>

                    </div>
                    
                
                </div>
            </div>
        </section>
    );
};

export default Skills;
