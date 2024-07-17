import React from 'react';
import { useEffect, useRef,  useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import WorkIcon from "../svg/workIcon.png"
import timelineElements from '../TimelineElement';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    const [isVisible, setIsVisible] = useState([])
    const timelineItemRefs = useRef([])

    useEffect (() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 1,
        }

        const handleIntersection = (entries, observer) => {
            entries.forEach((entry) => {
                const { id } = entry.target.dataset;
                if (entry.isIntersecting && !isVisible.includes(id)) {
                    setIsVisible((prevVisible) => [...prevVisible, id]);
                } else if (!entry.isIntersecting && isVisible.includes(id)) {
                    setIsVisible((prevVisible) => prevVisible.filter((item) => item !== id));
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        timelineItemRefs.current.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    let workIconStyles = { background: "#242424", fill: "#ffffff" };
    return (
        <section className="experience">
        <VerticalTimeline animate={true}>
            {timelineElements.map((element) => (
                <VerticalTimelineElement
                    key={element.id}
                    ref={(el) => (timelineItemRefs.current[element.id - 1] = el)}
                    className={`vertical-timeline-element ${isVisible.includes(element.id.toString()) ? 'visible' : ''}`}
                    date={element.date}
                    iconStyle={{ background: '#888', color: '#fff' }}
                    icon={<img src={WorkIcon} alt="Work Icon" style={{ width: '100%', height: '100%' }} />}
                    data-id={element.id}
                >
                    <h3 className="vertical-timeline-element-title">{element.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{element.location}</h4>
                    <p>{element.description}</p>
                    <button>{element.buttonText}</button>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    </section>
    );
};

export default Experience;