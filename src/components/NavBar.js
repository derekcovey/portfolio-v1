import React from 'react'

const NavBar = () => {

    return(
        <nav className="navbar wow animate__fadeIn" data-wow-duration="1s">
            <span className="navbar__name title">Diyorbek Tojikulov</span>
            <div className="navbar__links">
                <a href="#projects" className="navbar__link title">PROJECTS</a>
                <a href="#about" className="navbar__link title">ABOUT</a>
                <a href="#contact" className="navbar__link title">CONTACT</a>
            </div>
            <svg className="navbar__burger-button" width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1L25 1M0 9H25M0 17H25" stroke="white" strokeWidth="2"/>
            </svg>
        </nav>
    )
}

export default NavBar