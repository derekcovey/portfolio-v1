import React from 'react'
import BigProjectCard from '../components/BigProjectCard'

const Projects = () => {
    let project = null;

    return(
        <div id="projects" className="">
            <span className="navbar-link block-name">PROJECTS</span>
            <span className="navbar-link block-title">Some Things I've Built</span>

            <div className="big-project-cards-list">
                <BigProjectCard project={project}/>

            </div>
        </div>
    )
}

export default Projects