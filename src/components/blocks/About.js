import React, { useContext } from 'react'
import PortfolioContext from '../../context/portfolio-context'
import SkillsBlock from '../SkillsBlock'

const About = () => {
    const { skills } = useContext(PortfolioContext);

    return(
        <div id="about" className="about">
            <span className="title block-header">ABOUT</span>

            <div className="about__content">
                <div className="about__background-info">
                    <span className="title about__title">ABOUT</span>
                    <div className="about__text">
                        <p>
                            I'm passionate about writing beautiful code, enthusiatic and detail oriented Computer Science student. I'm currently a second year student at Vistula University studying Computer Sciense BCs.
                        </p>
                        <p>
                            I have experience developing simple landing pages, full-stack web applications, software, working with API's. As a software engineer, I strive to build software with understandable and readable code under the hood.
                        </p>
                        <p>
                            I love learning new and better ways of creating user-friendly products, which will result with another high quality software. I consider work as an ongoing education, and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn.
                        </p>
                        <p>
                            Beside developing, I enjoy swimming, prototyping some tech-stuff, doing sports and some other things.
                        </p>
                    </div>
                </div>

                <div className="about__skills"> 
                <span className="title about__title">SKILLS</span>
                    <div className="about__skills-lists">
                        {skills.map((e) => <SkillsBlock key={e.id} block={e}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About