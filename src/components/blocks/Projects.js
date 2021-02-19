import React, { useContext } from 'react'
import PortfolioContext from '../../context/portfolio-context';
import BigProjectCard from '../BigProjectCard'
import SmallProjectCard from '../SmallProjectCard'

const Projects = () => {
    const { bigProjectCards, smallProjectCards } = useContext(PortfolioContext)

    return(
        <div id="projects" className="projects">
            <span className="title block-header">PROJECTS</span>
            <span className="title block-title">Some Things I've Built</span>

            <div className="projects__big-cards-list">
                {bigProjectCards.map(project => <BigProjectCard key={project.id} project={project}/>)}
            </div>
            <span className="title block-title">Other Projects Of Mine</span>

            <div className="projects__small-cards-list">
                {smallProjectCards.map(project => <SmallProjectCard key={project.id} project={project}/>)}
            </div>
        </div>
    )
}

export default Projects