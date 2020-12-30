import React, { Component } from 'react'
import Typed from 'react-typed';
import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";
import Fade from 'react-reveal/Fade';

export default class intro extends Component {
    render() {
        return (
            <section id="home" className="intro">
                <Particles options={particlesOptions}/>
                <div className="container">
                    <Fade>
                    <div className="banner d-flex justify-content-center align-items-center flex-column">
                        <p>Hello there. Welcome!</p>
                        <br></br>
                        <h1>I'M FAIZ ADIL KHATAMI</h1>
                        <br></br>
                        <p>
                        <Typed
                            strings={['Software Engineer',
                                    'Front-End Developer',
                                    'Gamer ??? :D']}
                            typeSpeed={40}
                            backDelay={1100}
                            backSpeed={30}
                            loop
                        />
                        </p>
                    </div>
                    <div className="start">
                        <div className="btn-start">Let's getting started...</div>
                    </div>
                    </Fade>
                </div>
                <Fade>
                    <div className="intro-underlined"></div>
                </Fade>
            </section>
        )
    }
}
