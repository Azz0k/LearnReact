import React from "react"

class MainMenu extends React.Component{
    render() {


        return (

            <nav className="navbar navbar-expand-lg fixed-top">
                <a className="navbar-brand" href="#">Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-4">
                        <li className="nav-item">
                            <a className="nav-link" data-value="about" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " data-value="portfolio" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " data-value="blog" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " data-value="team" href="#"> Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " data-value="contact" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default MainMenu
