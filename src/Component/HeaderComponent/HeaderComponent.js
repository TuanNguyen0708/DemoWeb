import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <img src="./images/bg.jpg" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-link" href="#">Features</a>
                            <a className="nav-link" href="#">Pricing</a>
                            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}
