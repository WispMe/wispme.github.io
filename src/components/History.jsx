import React, { Component } from 'react'
import sd from '../assets/img/sd.png'
import smp from '../assets/img/smp.png'
import telu from '../assets/img/telu.png'
import sma from '../assets/img/sma.jpeg'
import aptrg from '../assets/img/aptrg.jpeg'
import telkomindonesia from '../assets/img/telkomindonesia.png'
import kodingnext from '../assets/img/kodingnext.png'
import Fade from 'react-reveal/Fade';

export default class History extends Component {
    render() {
        return (
            <section id="history" className="history">
                <Fade left cascade>
                    <div className="container">
                        <h1>HISTORY</h1>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center flex-column">
                                <h2>Education</h2>
                                <br></br>
                                <div className="education">
                                    <div className="history-border row">
                                        <div className="col-md-4 d-flex align-items-center justify-content-around img">
                                            <img src={sd} alt="SDN 1" width="70" height="80"/>
                                        </div>
                                        <div className="col-md-7 d-flex align-items-center flex-column justify-content-around">
                                            <p style={{textAlign: "center", lineHeight: '20px'}}>SDN 1 Kota Bengkulu</p>
                                            <p>2004 - 2010</p>
                                        </div>

                                    </div>
                                    <div className="line"></div>
                                    <div className="history-border row">
                                        <div className="col-md-4 d-flex align-items-center justify-content-around img">
                                            <img src={smp} alt="SMPN 1" width="70" height="100" style={{zIndex: '-1'}}/>
                                        </div>
                                        <div className="col-md-7 d-flex align-items-center flex-column justify-content-around">
                                            <p style={{textAlign: "center", lineHeight: '20px'}}>SMPN 1 Kota Bengkulu</p>
                                            <p>2010 - 2013</p>
                                        </div>

                                    </div>
                                    <div className="line"></div>
                                    <div className="history-border row">
                                        <div className="col-md-4 d-flex align-items-center justify-content-around img">
                                            <img src={sma} alt="SMAN 5" width="80" height="80" style={{zIndex: '-1'}}/>
                                        </div>
                                        <div className="col-md-7 d-flex align-items-center flex-column justify-content-around">
                                            <p style={{textAlign: "center", lineHeight: '20px'}}>SMAN 5 Kota Bengkulu</p>
                                            <p>2013 - 2016</p>
                                        </div>

                                    </div>
                                    <div className="line"></div>
                                    <div className="history-border row">
                                        <div className="col-md-4 d-flex align-items-center justify-content-around img">
                                            <img src={telu} alt="Tel-U" width="90" height="90" style={{zIndex: '-1'}}/>
                                        </div>
                                        <div className="col-md-7 d-flex align-items-center flex-column justify-content-around">
                                            <p style={{textAlign: "center", lineHeight: '20px'}}>Telkom University</p>
                                            <p>2016 - 2020</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-center flex-column" >
                                <h2>Experience</h2>
                                    <br></br>
                                <div className="experience">
                                    <div className="history-border row">
                                        <div className="col-md-7 d-flex align-items-center flex-column justify-content-around">
                                            <p style={{textAlign: "center", lineHeight: '20px'}}>Assistant of APTRG LAB</p>
                                            <p>2018</p>
                                        </div>
                                        <div className="col-md-4 d-flex align-items-center justify-content-around img">
                                            <img src={aptrg} alt="APTRG" width="100" height="100"/>
                                        </div>

                                    </div>
                                    <div className="line"></div>
                                    <div className="history-border row">
                                        <div className="col-md-7 d-flex align-items-center flex-column justify-content-around">
                                            <p style={{textAlign: "center", lineHeight: '20px'}}>Internship at Telkom Indonesia Bandung</p>
                                            <p>2019</p>
                                        </div>
                                        <div className="col-md-4 d-flex align-items-center justify-content-around img">
                                            <img src={telkomindonesia} alt="Telkom Indonesia" width="100" height="100" style={{zIndex: '-1'}}/>
                                        </div>

                                    </div>
                                    <div className="line"></div>
                                    <div className="history-border row">
                                        <div className="col-md-7 d-flex align-items-center flex-column justify-content-around">
                                            <p style={{textAlign: "center", lineHeight: '20px'}}>Bootcamp at Koding Next</p>
                                            <p>2020</p>
                                        </div>
                                        <div className="col-md-4 d-flex align-items-center justify-content-around img">
                                            <img src={kodingnext} alt="Koding Next" width="100" height="100" style={{zIndex: '-1'}}/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                <div className="line-section"></div>
            </section>
        )
    }
}
