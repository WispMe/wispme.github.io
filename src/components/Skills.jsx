import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';


export default class Skills extends Component {
    render() {
        const {data} = this.props
        return (
            <section id="skills" className="skills">
                <Fade cascade>
                    <div className="container">
                        <h1>Skills</h1>
                        <div className="skills-content d-flex justify-content-center align-items-center flex-wrap">
                            {data.map((skill, id) => (
                                <div className="skill d-flex flex-column align-items-center justify-content-center" key={id}>
                                    <img src={skill.img} alt={skill.name} width="60" height="60"/>
                                    <br></br>
                                    <h2>{skill.name}</h2>
                                    <p style={{textAlign: 'center'}}>{skill.desc}</p>
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
