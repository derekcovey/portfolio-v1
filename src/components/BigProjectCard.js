import React from 'react'

const BigProjectCard = ({project}) => {
    return(
        <div className="big-card">
            <div className="big-card__imgs">
                <img src={project.desktopImg} alt="Desktop View" className="big-card__desktop"/>
                <img src={project.mobileImg} alt="Mobile View" className="big-card__mobile"/>
            </div>
            <div className="big-card__content">
                <span className="big-card__name title">
                    {project.name}
                </span>
                <p className="big-card__info">
                    {project.info}
                </p>
            </div>
        </div>
    )
}

export default BigProjectCard