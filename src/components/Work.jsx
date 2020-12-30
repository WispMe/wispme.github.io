import React, { Component } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Fade from 'react-reveal/Fade';


export default class Work extends Component {
    render() {

          const {data} = this.props
          
        return (
            <section id="work" className="work">
                <Fade left cascade>
                    <div className="container">
                        <h1>WORK</h1>
                        <div className="d-flex justify-content-center align-items-center flex-wrap">
                            {data.map((work, id) => (
                                <div key={id}>
                                    <div className="work-img">
                                        <img src={work.img} width="300"/>
                                        <div className="middle">
                                            <div className="text"><a>{work.name}</a></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="line-section"></div>
                </Fade>
            </section>
        )
    }
}
