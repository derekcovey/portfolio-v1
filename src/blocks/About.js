import React from 'react'
import SkillsBlock from '../components/SkillsBlock'

const About = () => {

    let skills = [
        { name: 'LANGUAGES', list: ['Web(HTML,CSS)', 'JavaScript', 'TypeScript', 'C#', 'Python', 'SQL', 'C++'] }, 
        { name: 'FRAMEWORKS', list: ['React.js', 'Node.js', 'Express.js'] }, 
        { name: 'TOOLS', list: ['Git/Github', 'Linux(Unix)', 'Postman', 'Cisco Packet Tracer'] },
        { name: 'TOOLS', list: ['Git/Github', 'Linux(Unix)', 'Postman', 'Cisco Packet Tracer'] },
    ]

    return(
        <div id="about" className="about">
            <span className="title block-header wow animate__fadeInDown" data-wow-duration="0.75s" data-wow-offset="-10">ABOUT</span>

            <div className="about__content">
                <div className="about__background-info wow animate__slideInUp" data-wow-duration="1.5s" data-wow-offset="-10">
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

                <div className="about__skills wow animate__slideInUp" data-wow-duration="1.5s" data-wow-offset="20"> 
                <span className="title about__title">SKILLS</span>
                    <div className="about__skills-lists">
                        {skills.map((e, i) => <SkillsBlock key={i} block={e}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About