import React, { useEffect, useRef, useState } from 'react';
import WorkIcon from "../svg/workIcon.png";
import timelineElements from '../TimelineElement';


const Experience = () => {
    const [visibleElements, setVisibleElements] = useState([]);
    const elementRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute('data-id');
                if (entry.isIntersecting) {
                    setVisibleElements((prev) => [...new Set([...prev, id])]);
                } else {
                    setVisibleElements((prev) => prev.filter((item) => item !== id));
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        elementRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className="timeline">
            <div className="timeline__line"></div>
            {timelineElements.map((element, index) => (
            
                <div
                    key={element.id}
                    className={`timeline__element ${visibleElements.includes(element.id.toString()) ? 'visible' : ''}`}
                    ref={(el) => (elementRefs.current[index] = el)}
                    data-id={element.id.toString()}
                >
                    <div className='timeline__content-container'>
                    <div className="timeline__date">{element.date}</div>
                    <div className="timeline__content">
                        <h3 className="timeline__title">{element.title}</h3>
                        <h4 className="timeline__subtitle">{element.location}</h4>
                        <p>{element.description}</p>
                        <button>{element.buttonText}</button>
                    </div>
                </div>
                </div>
            ))}
        </section>
    );
};

export default Experience;
