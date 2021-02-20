import React from 'react'
import Fade from 'react-reveal/Fade'

const BigProjectCard = ({project}) => {
    return(
        <div className="big-card">
            <Fade bottom>
                <div className="big-card__imgs">
                    <img src={project.desktopImg} alt="Desktop View" className="big-card__desktop"/>
                    <img src={project.mobileImg} alt="Mobile View" className="big-card__mobile"/>
                </div>
            </Fade>
            
            <Fade bottom>
                <div className="big-card__content">
                    <span className="big-card__name title">
                        {project.name}
                    </span>
                    <p className="big-card__info">
                        {project.info}
                    </p>
                </div>
            </Fade>
        </div>
    )
}

export default BigProjectCard