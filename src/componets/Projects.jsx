import {useEffect} from 'react';
import iturnerImage from '../svg/ITurner.png'
import tasksyncImage from '../svg/TaskSync.png'



const Projects = () => {


    

    return (
        <section id="projects" className='projects'>

            
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
                    <div className='projects__description'>This is where the project description goes, lets keep it to a few lines and i am going to type out a few lines here to act as an example for future descriptions so lets be careful about how much we share!</div>
                    </div>

                    <div className='projects__button-container'>
                        <a href='https://www.linkedin.com/in/mattstudzinski' className='projects__live-button'>View Deployed</a>
                        <a href='#' className='projects__code-button'>Github</a>
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
                    <h1 className='projects__title'>InventoryTurner</h1>
                        
                    
                    <ul className='projects__tech-stack'>
                        <li className='projects__tech' >CSS</li>
                        <li className='projects__tech' >React</li>
                        <li className='projects__tech' >MongoDB</li>
                    </ul>
                    </div>
                    <h3 className='projects__subtitle'>Issue tracking application</h3>
                    <div className='projects__description'>This is where the project description goes, lets keep it to a few lines and i am going to type out a few lines here to act as an example for future descriptions so lets be careful about how much we share!</div>
                    </div>

                    <div className='projects__button-container'>
                        <a href='https://www.linkedin.com/in/mattstudzinski' className='projects__live-button'>View Deployed</a>
                        <a href='https://www.linkedin.com/in/mattstudzinski' className='projects__code-button'>Github</a>
                    </div>
                    </div>
                    
                    
                </article>
            </div>


            

            


            </div>
        </section>
    );
};

export default Projects;