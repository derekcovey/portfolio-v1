import React from 'react'

const Contact = () => {

    return(
        <div id="contact" className="contact">
            <div className="contact__header title block-header">
                Get in touch!
            </div>
            <ul className="contact__social-media">
                <li><a href="https://github.com/derekcovey" target="_blank">Github</a></li>
                <li><a href="https://www.linkedin.com/in/diyorbektojikulov/" target="_blank">LinkedIN</a></li>
                <li><a href="https://www.facebook.com/coveyderek/" target="_blank">Facebook</a></li>
                <li><a href="https://t.me/sw_derek" target="_blank">Telegram</a></li>
            </ul>
            <div className="contact__footer">
                2021 &copy; Diyorbek Tojikulov
            </div>
        </div>
    )
}

export default Contact