import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../mydata.js'

class Contact extends Component {
    state = {}

    render() {
        return (
            <div>
                <h1>
                    <Fade bottom cascade>Contact.</Fade>
                </h1>
                <Fade bottom>
                    <div className='contact-content'>
                        <h1>
                            Let's create your next <br></br>
                            <span className='amazing-color'>experience together</span>
                        </h1>
                        <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                        <ul>
                            {data.social.map((link, index) => (
                                <a target='_blank' rel="noopener noreferrer" href={link.url}>
                                    <button key={index}>
                                        {link.name}
                                    </button>
                                </a>
                            ))}
                        </ul>
                    </div>
                </Fade>
                <span className='footer'>Made with ❤ by <span className="footer-name">Oladipo Osinubi</span></span>
            </div>
        )
    }
}

export default Contact;