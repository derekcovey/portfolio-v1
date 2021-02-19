import React from 'react'

const Contact = () => {

    return(
        <div id="contact" className="contact">
            <div className="contact__header title block-header">
                Get in touch!
            </div>
            <ul className="contact__social-media">
                <li><a href="https://github.com/derekcovey">Github</a></li>
                <li><a href="https://www.linkedin.com/in/diyorbektojikulov/">LinkedIN</a></li>
                <li><a href="https://www.facebook.com/coveyderek/">Facebook</a></li>
                <li><a href="https://t.me/sw_derek">Telegram</a></li>
            </ul>
            <div className="contact__footer">
                2021 &copy; Diyorbek Tojikulov
            </div>
        </div>
    )
}

export default Contact