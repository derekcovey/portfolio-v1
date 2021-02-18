import React, { useEffect } from 'react'

const NavBar = () => {

    return(
        <nav className="navbar wow animate__fadeIn" data-wow-duration="1s">
            <span className="navbar__name title">Diyorbek Tojikulov</span>
            <div className="navbar__links">
                <a href="#projects" className="navbar__link title">PROJECTS</a>
                <a href="#about" className="navbar__link title">ABOUT</a>
                <a href="#contact" className="navbar__link title">CONTACT</a>
            </div>
        </nav>
    )
}

export default NavBar