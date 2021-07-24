import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div id="header" style={{backgroundColor:'gray'}}>
                <nav className="navbar navbar-expand-lg navbar-light container">
                    <img src="./images/logo-light.png" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" href="#slider">HOME</a>
                            <a className="nav-link" href="#feature">FEATURES</a>
                            <a className="nav-link" href="#service">SERVICES</a>
                            <a className="nav-link" href="#client">CLIENT</a>
                            <a className="nav-link" href="#team">TEAM</a>
                            <a className="nav-link" href="#pricing">PRICING</a>
                            <a className="nav-link" href="#contact">CONTACT</a>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}
