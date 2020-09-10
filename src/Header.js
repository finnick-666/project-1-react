import React from 'react';

const Header = () => (
    <header>
    <div id="Header">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <div className="container">
                <button className="navbar-toggler" data-toggle="collapse" data-target="#Navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a href="#Home" className="navbar-brand">
                    <h3>Finnick</h3>
                </a>
                <div className="collapse navbar-collapse" id="Navbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#About" className="nav-link">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Skills" className="nav-link">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Resume" className="nav-link">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</header>
);

export default Header;