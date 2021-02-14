import React from 'react'

const NavBar = () => {

    return(
        <nav className="navbar">
            <span className="name">Diyorbek Tojikulov</span>
            <div className="navbar_links">
                <a href="#projects" className="navbar-link">PROJECTS</a>
                <a href="#about" className="navbar-link">ABOUT</a>
                <a href="#contact" className="navbar-link">CONTACT</a>
            </div>
        </nav>
    )
}

export default NavBar