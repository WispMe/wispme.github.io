import React, { Component } from 'react'
import profile from '../assets/img/profile1.jpg'
import Zoom from 'react-reveal/Zoom';

export default class About extends Component {
    render() {
        return (
            <section id="about" className="about">
                <Zoom bottom cascade>
                    <div className="container">
                        <h1>ABOUT ME</h1>
                        <div className="row content">
                            <div className="col-md-7 desc d-flex align-items-center">
                                <p>Greetings! My name is Faiz Adil Khatami. I'm from Indonesia. This is my website where you can find more about myself.
                                    Still a beginner at coding, but hopefully I'm mastering it soon! Like a Padawan become a Jedi Knight, right?
                                </p>
                            </div>
                            <div className="d-none d-md-block col-md-1"><div className="line"></div></div>
                            <div className="col-md-4 d-flex align-items-center">
                                <div className="border-profile">
                                <img src={profile} alt="It's me!" width="200" height="270" title="You can't see me"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line-section"></div>
                </Zoom>
            </section>
        )
    }
}
