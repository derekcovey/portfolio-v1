import React from 'react'
import BigProjectCard from '../BigProjectCard'
import SmallProjectCard from '../SmallProjectCard'
import Fade from 'react-reveal/Fade'

const Projects = ({bigProjectCards, smallProjectCards}) => {

    return(
        <div id="projects" className="projects">
            <Fade bottom duration={500}>
                <span className="title block-header">PROJECTS</span>
                <span className="title block-title">Some Things I've Built</span>
            </Fade>

            <div className="projects__big-cards-list">
                {bigProjectCards.map(project => <BigProjectCard key={project.id} project={project}/>)}
            </div>

            <Fade bottom duration={500}>
                <span className="title block-title">Other Projects Of Mine</span>
            </Fade>

            <div className="projects__small-cards-list">
                {smallProjectCards.map(project => <SmallProjectCard key={project.id} project={project}/>)}
            </div>
        </div>
    )
}

export default Projects