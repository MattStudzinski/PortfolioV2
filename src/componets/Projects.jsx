import React from 'react';
import {Tilt} from 'react-tilt';


const Projects = () => {
    return (
        <section className='projects'>

            
            <div className='projects__card-container'>


            <Tilt className="Tilt" options= {{ max: 10, scale: 1.03}}>
                <article className='projects__card'>
                    <div className='projects__header-container'>
                    <h1 className='projects__title'>Inventory Turner</h1>
                        <h2 className='projects__year'>2023</h2>
                    </div>
                    <ul className='projects__tech-stack'>
                        <li className='projects__tech' id='tech-css'>CSS</li>
                        <li className='projects__tech' id='tech-react'>React</li>
                        <li className='projects__tech' id='tech-mongodb'>MongoDB</li>
                    </ul>
                    <div className='projects__description'>This is where the project description goes, lets keep it to a few lines and i am going to type out a few lines here to act as an example for future descriptions so lets be careful about how much we share!</div>
                    <img className='projects__image' src='https://bloggingwizard.com/wp-content/uploads/2021/06/envato-elements-Best-Stock-Photo-Sites.png' alt='Project'/>
                    <div className='projects__button-container'>
                        <a href='#' className='projects__live-button'>View Deployed</a>
                        <a href='#' className='projects__code-button'>Github</a>
                    </div>
                </article>
            </Tilt>


            <Tilt className="Tilt" options= {{ max: 10, scale: 1.03}}>
                <article className='projects__card'>
                    <div className='projects__header-container'>
                    <h1 className='projects__title'>Inventory Turner</h1>
                        <h2 className='projects__year'>2023</h2>
                    </div>
                    <ul className='projects__tech-stack'>
                        <li className='projects__tech' id='tech-css'>CSS</li>
                        <li className='projects__tech' id='tech-react'>React</li>
                        <li className='projects__tech' id='tech-mongodb'>MongoDB</li>
                    </ul>
                    <div className='projects__description'>This is where the project description goes, lets keep it to a few lines and i am going to type out a few lines here to act as an example for future descriptions so lets be careful about how much we share!</div>
                    <img className='projects__image' src='https://bloggingwizard.com/wp-content/uploads/2021/06/envato-elements-Best-Stock-Photo-Sites.png' alt='Project'/>
                    <div className='projects__button-container'>
                        <a href='#' className='projects__live-button'>View Deployed</a>
                        <a href='#' className='projects__code-button'>Github</a>
                    </div>


                </article>
                </Tilt>
            </div>



            <div className='projects__card-container2'>


            <Tilt className="Tilt" options= {{ max: 10, scale: 1.03}}>
                <article className='projects__card'>
                    <div className='projects__header-container'>
                    <h1 className='projects__title'>Inventory Turner</h1>
                        <h2 className='projects__year'>2023</h2>
                    </div>
                    <ul className='projects__tech-stack'>
                        <li className='projects__tech' id='tech-css'>CSS</li>
                        <li className='projects__tech' id='tech-react'>React</li>
                        <li className='projects__tech' id='tech-mongodb'>MongoDB</li>
                    </ul>
                    <div className='projects__description'>This is where the project description goes, lets keep it to a few lines and i am going to type out a few lines here to act as an example for future descriptions so lets be careful about how much we share!</div>
                    <img className='projects__image' src='https://bloggingwizard.com/wp-content/uploads/2021/06/envato-elements-Best-Stock-Photo-Sites.png' alt='Project'/>
                    <div className='projects__button-container'>
                        <a href='#' className='projects__live-button'>View Deployed</a>
                        <a href='#' className='projects__code-button'>Github</a>
                    </div>
                </article>
            </Tilt>

            <Tilt className="Tilt" options= {{ max: 10, scale: 1.03}}>
                <article className='projects__card'>
                    <div className='projects__header-container'>
                    <h1 className='projects__title'>Inventory Turner</h1>
                        <h2 className='projects__year'>2023</h2>
                    </div>
                    <ul className='projects__tech-stack'>
                        <li className='projects__tech' id='tech-css'>CSS</li>
                        <li className='projects__tech' id='tech-react'>React</li>
                        <li className='projects__tech' id='tech-mongodb'>MongoDB</li>
                    </ul>
                    <div className='projects__description'>This is where the project description goes, lets keep it to a few lines and i am going to type out a few lines here to act as an example for future descriptions so lets be careful about how much we share!</div>
                    <img className='projects__image' src='https://bloggingwizard.com/wp-content/uploads/2021/06/envato-elements-Best-Stock-Photo-Sites.png' alt='Project'/>
                    <div className='projects__button-container'>
                        <a href='#' className='projects__live-button'>View Deployed</a>
                        <a href='#' className='projects__code-button'>Github</a>
                    </div>
                </article>
            </Tilt>


            </div>
        </section>
    );
};

export default Projects;