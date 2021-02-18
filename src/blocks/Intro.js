import React from 'react'
import NavBar from '../components/NavBar'

const Intro = () => {

    return(
        <div id="intro" className="intro">
                <NavBar />
                <div className="intro__content">
                    <div className="intro__text">
                        <h1 id="intro__greeting" className="wow animate__fadeInDown" data-wow-duration="1s">HI, I'M DIYORBEK</h1>
                        <p className="wow animate__fadeInDown" data-wow-duration="1.2s">Junior FullStack Web-Developer</p>
                    </div>
                    <svg id="intro__downarrow" className="wow animate__fadeInDown" data-wow-duration="0.5s" width="66" height="35" viewBox="0 0 66 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3L31.5858 31.5858C32.3668 32.3668 33.6332 32.3668 34.4142 31.5858L63 3" stroke="#E7E7E7" strokeWidth="5" strokeLinecap="round"/>
                    </svg>
                </div>
        </div>
    )
}

export default Intro