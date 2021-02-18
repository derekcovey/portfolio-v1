import React from 'react'
import TechnologyTag from '../components/TechnologyTag'

const SmallProjectCard = ({project}) => {

    return(
        <div className="small-card wow animate__slideInUp" data-wow-duration="1.5s" data-wow-offset="20">
            <div className="small-card__header">
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none" viewBox="0 0 24 24" stroke="#64FFDA">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="small-card__external-link" width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="#64FFDA">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </div>
            <div className="small-card__content">
                <div className="small-card__name">
                    {project.name}
                </div>
                <p className="small-card__info">
                    {project.info}
                </p>
            </div>
            <div className="small-card__footer">
                {/* <TechnologyTag technology={project.technologies[0]} /> */}
                <TechnologyTag technology={'React.js'} />
                <TechnologyTag technology={'Angular.js'} />
                <TechnologyTag technology={'Tailwindcss'} />
                <TechnologyTag technology={'Minecraft'} />
                <TechnologyTag technology={'Networking'} />
                <TechnologyTag technology={'TypeScript'} />
                <TechnologyTag technology={'Firebase'} />
            </div>
        </div>
    )
}

export default SmallProjectCard