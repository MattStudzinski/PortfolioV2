import {useEffect} from 'react';
import iturnerImage from '../svg/ITurner.png'
import tasksyncImage from '../svg/TaskSync.png'



const Projects = () => {

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('projects__card--visible')
                    observer.unobserve(entry.target)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        const cards = document.querySelectorAll('.projects__card')
        cards.forEach(card => observer.observe(card))

        return () => {
            if(observer) {
                cards.forEach(card => observer.unobserve(card))
            }
        }
    }, [])

    

    return (
        <section id="projects" className='projects'>
            <h1 className='projects__section-title'>Projects</h1>

            
            <div className='projects__card-container'>


            <div>
                <article className='projects__card'>
                <img className='projects__image' src={tasksyncImage} alt='Project'/>
                    <div className='projects__info-container'>
                        <div className='projects__body-container'>
                        <div className='projects__header-container'>
                    <h1 className='projects__title'>TaskSync</h1>
                        
                    
                    <ul className='projects__tech-stack'>
                        <li className='projects__tech' >CSS</li>
                        <li className='projects__tech' >React</li>
                        <li className='projects__tech' >MongoDB</li>
                    </ul>
                    </div>
                    <h3 className='projects__subtitle'>Issue tracking application</h3>
                    <div className='projects__description'>Developed a robust issue tracker for drivers and warehouse staff, featuring JWT authentication and role-based access. Implemented cron-enabled workflows and a calendar for efficient task management, along with dynamic filters for refined tracking.</div>
                    </div>

                    <div className='projects__button-container'>
                        <a href='https://github.com/MattStudzinski' className='projects__live-button'>View Deployed</a>
                        <a href='https://github.com/MattStudzinski' className='projects__code-button'>Github</a>
                    </div>
                    </div>
                    
                    
                </article>
            </div>
            <div>
                <article className='projects__card projects__card--inverse'>
                <img className='projects__image' src={iturnerImage} alt='Project'/>
                    <div className='projects__info-container'>
                        <div className='projects__body-container'>
                        <div className='projects__header-container'>
                    <h1 className='projects__title'>Task Trove</h1>
                        
                    
                    <ul className='projects__tech-stack'>
                        <li className='projects__tech' >CSS</li>
                        <li className='projects__tech' >React</li>
                        <li className='projects__tech' >MongoDB</li>
                    </ul>
                    </div>
                    <h3 className='projects__subtitle'>Issue tracking application</h3>
                    <div className='projects__description'>Created a software solution to optimize warehouse inventory by processing Excel data into JSON and analyzing item usage rates. Automated daily sorting of datasets to flag items for removal or monitoring based on usage frequency, while tracking warehouse activity for historical insights.</div>
                    </div>

                    <div className='projects__button-container'>
                        <a href='https://github.com/MattStudzinski' className='projects__live-button'>View Deployed</a>
                        <a href='https://github.com/MattStudzinski' className='projects__code-button'>Github</a>
                    </div>
                    </div>
                    
                    
                </article>
            </div>


            

            


            </div>
        </section>
    );
};

export default Projects;