import React from 'react'
import SkillsBlock from '../SkillsBlock'
import Fade from 'react-reveal/Fade'

const About = ({skills}) => {

    return(
        <div id="about" className="about">
            <Fade bottom duration={500}>
                <span className="title block-header">ABOUT</span>
            </Fade>

            <div className="about__content">
                <Fade right>
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
                </Fade>
                <Fade left>
                    <div className="about__skills"> 
                        <span className="title about__title">SKILLS</span>
                        <div className="about__skills-lists">
                            {skills.map((e) => <SkillsBlock key={e.id} block={e}/>)}
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default About