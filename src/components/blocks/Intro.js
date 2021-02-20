import React from 'react'
import NavBar from '../NavBar'
import Fade from 'react-reveal/Fade'

const Intro = () => {

    return(
        <div id="intro" className="intro">
            <Fade duration={1750}>
                <NavBar />
            </Fade>
                <div className="intro__content">
                    <Fade top distance='40%'>
                        <div className="intro__text">
                            <h1 id="intro__greeting">HI, I'M DIYORBEK</h1>
                            <p>FullStack Web-Developer</p>
                        </div>
                    </Fade>
                    <Fade duration={2500}>
                        <a href="#projects">
                            <svg id="intro__downarrow" width="66" height="35" viewBox="0 0 66 35"  fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3L31.5858 31.5858C32.3668 32.3668 33.6332 32.3668 34.4142 31.5858L63 3" stroke="#E7E7E7" strokeWidth="5" strokeLinecap="round"/>
                            </svg>
                        </a>
                    </Fade>
                </div>
        </div>
    )
}

export default Intro