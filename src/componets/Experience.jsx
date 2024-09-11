import React, { useEffect, useRef, useState } from 'react';
import timelineElements from '../TimelineElement';


const Experience = () => {
    const [visibleElements, setVisibleElements] = useState([]);
    const elementRefs = useRef([]);
    
    return (
        <section id='experience' className="timeline">
            <div className='timeline__container'>
            <div className="timeline__line"></div>
            {timelineElements.map((element, index) => (
            
                <div
                    key={element.id}
                    className={`timeline__element ${visibleElements.includes(element.id.toString()) ? 'visible' : ''} ${index % 2 === 0 ? 'timeline__element-left' : 'timeline__element-right'}`}
                    ref={(el) => (elementRefs.current[index] = el)}
                    data-id={element.id.toString()}
                >
                    <div className='timeline__content-container'>
                    <div className={`timeline__date ${index % 2 === 0 ? 'timeline__date-left' : 'timeline__date-right'}`}>{element.date}</div>
                    <div className={`timeline__content ${index % 2 === 0 ? 'timeline__content-left' : 'timeline__content-right'}`}>
                        <div className='timeline__title-container'>
                        <h3 className="timeline__title">{element.title}</h3>
                        <h4 className="timeline__subtitle">{element.location}</h4>
                        </div>
                        <p className='timeline__description'>{element.description}</p>
                        
                    </div>
                </div>
                </div>
            ))}
            </div>
        </section>
    );
};

export default Experience;
