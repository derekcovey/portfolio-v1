import React from 'react'
import BigProjectCard from '../components/BigProjectCard'
import SmallProjectCard from '../components/SmallProjectCard'

const Projects = () => {
    let projects = [{
        desktopImg: 'https://via.placeholder.com/560x315?text=Desktop+View',
        mobileImg: 'https://via.placeholder.com/135x240/A6A6A6/000000?text=Mobile+View',
        name: 'Lorem ipsum dolor sit amet',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut delectus a, nostrum rerum accusamus optio blanditiis aliquid rem inventore possimus doloribus saepe voluptas error praesentium ut. Fugiat harum maiores est. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias a excepturi, recusandae nobis enim officiis, quidem saepe maiores molestiae magni fugit mollitia dolorum autem ratione doloribus modi quo nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut delectus a, nostrum rerum accusamus optio blanditiis aliquid rem inventore possimus doloribus saepe voluptas error praesentium ut. Fugiat harum maiores est. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias a excepturi, recusandae nobis enim officiis, quidem saepe maiores molestiae magni fugit mollitia dolorum autem ratione doloribus modi quo nam'
    },
    {
        name: 'Lorem ipsum dolor sit amet',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut delectus a, nostrum rerum accusamus optio blanditiis aliquid rem inventore possimus doloribus saepe voluptas error praesentium ut. Fugiat harum maiores est.',
        technologies: ['React.js', 'Tailwindcss', 'Express.js']
    },{
        name: 'Lorem ipsum dolor sit amet',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut delectus a, nostrum rerum accusamus optio',
        technologies: ['React.js', 'Tailwindcss', 'Express.js', 'React.js', 'Tailwindcss', 'Express.js']
    }
    ];

    return(
        <div id="projects" className="projects">
            <span className="title block-header wow animate__fadeInDown" data-wow-duration="0.75s" data-wow-offset="20">PROJECTS</span>
            <span className="title block-title wow animate__fadeIn" data-wow-duration="2s" data-wow-offset="20">Some Things I've Built</span>

            <div className="projects__big-cards-list">
                <BigProjectCard project={projects[0]}/>
                <BigProjectCard project={projects[0]}/>
                <BigProjectCard project={projects[0]}/>

            </div>
            <span className="title block-title wow animate__fadeIn" data-wow-duration="2s" data-wow-offset="20">Other Projects Of Mine</span>

            <div className="projects__small-cards-list">
                <SmallProjectCard project={projects[1]} />
                <SmallProjectCard project={projects[2]} />
                <SmallProjectCard project={projects[2]} />
                <SmallProjectCard project={projects[2]} />
                <SmallProjectCard project={projects[1]} />
                <SmallProjectCard project={projects[2]} />
                <SmallProjectCard project={projects[1]} />
            </div>
        </div>
    )
}

export default Projects