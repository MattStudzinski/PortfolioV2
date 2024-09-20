
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
import {Tilt} from 'react-tilt'



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
        <section id="skills"  className='skills'>
            <h1 className='skills__section-title'>Skills</h1>
        <div className='skills__container'>
            <div className='skills__item-container'>
                <div className='skills__main-skills'>
                <Tilt className="Tilt" options= {{ max: 50, scale: 1.03}}>
                    <div ref={ref1} className={`skills__item-large skills__item ${inView1 ? 'skills__item--1 skills__item--inView' : ''}`} style={{ gridColumn: '1', gridRow: '1' }}>
                        <MongoLogo />
                    </div>
                </Tilt>
                <Tilt className="Tilt" options= {{ max: 50, scale: 1.03}}>
                    <div ref={ref2} className={`skills__item-large skills__item ${inView2 ? 'skills__item--2 skills__item--inView' : ''}`} style={{ gridColumn: '2', gridRow: '1' }}>
                        <ReactLogo />
                    </div>
                </Tilt>
                <Tilt className="Tilt" options= {{ max: 50, scale: 1.03}}>
                    <div ref={ref3} className={`skills__item-large skills__item ${inView3 ? 'skills__item--3 skills__item--inView' : ''}`} style={{ gridColumn: '3', gridRow: '1' }}>
                        <ExpressLogo />
                    </div>
                </Tilt>
                <Tilt className="Tilt" options= {{ max: 50, scale: 1.03}}>
                    <div ref={ref4} className={`skills__item-large skills__item ${inView4 ? 'skills__item--4 skills__item--inView' : ''}`} style={{ gridColumn: '1', gridRow: '2' }}>
                        <NodeLogo />
                    </div>
                </Tilt>
                </div>
            
                <div className='skills__secondary-skills'>
                <Tilt className="Tilt" options= {{ max: 50, scale: 1.03}}>
                    <div ref={ref5} className={`skills__item-med skills__item ${inView5 ? 'skills__item--5 skills__item--inView' : ''}`} style={{ gridColumn: '2', gridRow: '3' }}>
                        <Javascript />
                    </div>
                </Tilt>
                <Tilt className="Tilt" options= {{ max: 50, scale: 1.03}}>
                    <div ref={ref6} className={`skills__item-med skills__item ${inView6 ? 'skills__item--6 skills__item--inView' : ''}`} style={{ gridColumn: '3', gridRow: '1' }}>
                        <CssLogo />
                    </div>
                </Tilt>
                <Tilt className="Tilt" options= {{ max: 50, scale: 1.03}}>
                    <div ref={ref7} className={`skills__item-med skills__item ${inView7 ? 'skills__item--7 skills__item--inView' : ''}`}>
                        <Sass />
                    </div>
                </Tilt>
                <Tilt className="Tilt" options= {{ max: 50, scale: 1.03}}>
                    <div ref={ref9} className={`skills__item-med skills__item ${inView9 ? 'skills__item--9 skills__item--inView' : ''}`}>
                        <Html />
                    </div>
                </Tilt>
                </div>
                
                <div className='skills__aux-skills'>
                <Tilt className="Tilt" options= {{ max: 50, scale: 1.03}}>
                    <div ref={ref8} className={`skills__item-small skills__item ${inView8 ? 'skills__item--8 skills__item--inView' : ''}`}>
                        <JwtLogo />
                    </div>
                </Tilt>
                <Tilt className="Tilt" options= {{ max: 50, scale: 1.03}}>
                    <div ref={ref10} className={`skills__item-small skills__item ${inView10 ? 'skills__item--10 skills__item--inView' : ''}`}>
                        <PythonLogo />
                    </div>
                </Tilt>
                <Tilt className="Tilt" options= {{ max: 50, scale: 1.03}}>
                    <div ref={ref11} className={`skills__item-small skills__item ${inView11 ? 'skills__item--11 skills__item--inView' : ''}`}>
                        <PostmanLogo />
                    </div>
                </Tilt>
                <Tilt className="Tilt" options= {{ max: 50, scale: 1.03}}>
                    <div ref={ref12} className={`skills__item-small skills__item ${inView12 ? 'skills__item--12 skills__item--inView' : ''}`}>
                        <GitLogo />
                    </div>
                </Tilt>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Skills;
