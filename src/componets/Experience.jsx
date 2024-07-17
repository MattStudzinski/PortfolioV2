import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import WorkIcon from "../svg/workIcon.png"
import timelineElements from '../TimelineElement';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {

    let workIconStyles = { background: "#242424", fill: "#ffffff" };
    return (
        <section className='experience'>
        <VerticalTimeline className='experience__timeline'>
            {timelineElements.map(element => (
                <VerticalTimelineElement
                    key={element.id}
                    className="experience__timeline-element"
                    contentArrowStyle={{ borderRight: '7px solid #888' }}
                    contentStyle={{ background: '#444', color: '#fff' }}
                    date={element.date}
                    iconStyle={{ background: '#888', color: '#fff' }}
                    icon={
                        <img 
                                src={WorkIcon} 
                                alt="Work Icon" 
                                style={{ width: '60%', height: '60%' }} 
                            />
                    }
                  
                >
                    <h3 className="experience__timeline-element-title">{element.title}</h3>
                    <h4 className="experience__timeline-element-subtitle">{element.location}</h4>
                    <p>{element.description}</p>
                    <button>{element.buttonText}</button>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    </section>
    );
};

export default Experience;