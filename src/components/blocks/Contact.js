import React from 'react'
import Fade from 'react-reveal/Fade'

const Contact = () => {

    return(
        <Fade>
            <div id="contact" className="contact">
                <div className="contact__header title block-header">
                    Get in touch!
                </div>
                <ul className="contact__social-media">
                    <li><a href="https://github.com/dtojikulov">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/diyorbektojikulov/">LinkedIN</a></li>
                    <li><a href="https://www.facebook.com/coveyderek/">Facebook</a></li>
                    <li><a href="https://t.me/sw_derek">Telegram</a></li>
                </ul>
                <div className="contact__footer">
                    2021 &copy; Diyorbek Tojikulov
                </div>
            </div>
        </Fade>
    )
}

export default Contact
