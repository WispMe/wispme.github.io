import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import classnames from "classnames"
import { Link, animateScroll as scroll } from "react-scroll";
import $ from "jquery"

export default class Navbar extends Component {
    state = {
        backgroundColor: '',
        prevScrollpos: window.pageYOffset,
        visible: true,
        nav: false
      }
    
    listenScrollEvent = e => {
    if (window.scrollY > 10) {
        this.setState({backgroundColor: 'black'})
    } else {
        this.setState({backgroundColor: ''})
    }
    }

    handleScroll = () => {
        const { prevScrollpos } = this.state;
      
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
      
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };

    componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
    window.addEventListener("scroll", this.handleScroll)
    }

    navClick = () => {
        $("#navbarToggleExternalContent").removeClass('show')
    }


    render() {
        const {backgroundColor, visible} = this.state
        return (
            <nav className={classnames({"nav-hide": !visible})} style={{backgroundColor}}>
                <div className="container">
                    <Fade>
                        <div>
                            <div className="row">
                                <div className="logo col-3 d-flex justify-content-center align-items-center">
                                    <h1>_WispMe</h1>
                                </div>
                                <div className="col-6 d-md-none"></div>
                                <div className="navbar navbar-dark col-2 d-flex flex-column d-md-none">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                                <div className="collapse d-md-flex col-md-9 justify-content-end" style={{width: "100%", textAlign: "center", padding: "0", backgroundColor}} id="navbarToggleExternalContent">
                                    <ul className="li-md d-md-flex">
                                        <li><Link activeClass="active" to="home" onClick={this.navClick} spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
                                        <li><Link activeClass="active" to="about" onClick={this.navClick} spy={true} smooth={true} offset={-70} duration={500}>About</Link></li>
                                        <li><Link activeClass="active" to="history" onClick={this.navClick} spy={true} smooth={true} offset={-70} duration={500}>History</Link></li>
                                        <li><Link activeClass="active" to="work" onClick={this.navClick} spy={true} smooth={true} offset={-70} duration={500}>Work</Link></li>
                                        <li><Link activeClass="active" to="skills" onClick={this.navClick} spy={true} smooth={true} offset={-70} duration={500}>Skills</Link></li>
                                        <li><Link activeClass="active" to="contact" onClick={this.navClick} spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </nav>
        )
    }
}
