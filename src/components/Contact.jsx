import React, { Component } from 'react'
import ig from '../assets/img/ig1.png'
import twitter from '../assets/img/twitter1.png'
import linkedin from '../assets/img/linkedin.png'
import steam from '../assets/img/steam.png'
import github from '../assets/img/github.png'
import Fade from 'react-reveal/Fade';


export default class Contact extends Component {
    render() {
        return (
            <section id="contact" className="contact">
                <Fade>
                    <div className="container">
                        <h1>GET IN TOUCH</h1>
                        <p style={{textAlign: 'center'}}>Let's create something good in the future. Together.</p>
                        <br></br>
                        <h1 style={{textDecoration: 'underline'}}><a href="mailto:faizfak@gmail.com">faizfak@gmail.com</a></h1>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="contact-content"><a href="https://www.instagram.com/_wispme/"><img src={ig} alt="Instagram" width="28" height="28" /></a></div>
                            <div className="contact-content"><a href="https://www.linkedin.com/in/wispme"><img src={linkedin} alt="LinkedIn" width="28" height="28" /></a></div>
                            <div className="contact-content"><a href="https://twitter.com/WispMe_"><img src={twitter} alt="Twitter" width="28" height="28" /></a></div>
                            <div className="contact-content"><a href="https://steamcommunity.com/id/faizfak/"><img src={steam} alt="Steam" width="28" height="28" /></a></div>
                            <div className="contact-content"><a href="https://github.com/WispMe/"><img src={github} alt="Github" width="28" height="28" /></a></div>


                        </div>
                    </div>
                </Fade>
            </section>
        )
    }
}
