import React from 'react'

const BigProjectCard = ({project}) => {

    return(
        <div className="big-project-card">
            <div className="big-project-card-screens">
                <img src="https://via.placeholder.com/560x315?text=Desktop+View" alt="Desktop View" className="desktop"/>
                <img src="https://via.placeholder.com/135x240/A6A6A6/000000?text=Mobile+View" alt="#" className="mobile"/>
            </div>
            <div className="big-project-card-content">
                <span className="big-project-card-name">
                    {/* {project.name} */}
                    Lorem ipsum dolor sit amet
                </span>
                <p className="big-project-card-info">
                    {/* {project.info} */}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut delectus a, nostrum rerum accusamus optio blanditiis aliquid rem inventore possimus doloribus saepe voluptas error praesentium ut. Fugiat harum maiores est.
                </p>
            </div>
        </div>
    )
}

export default BigProjectCard