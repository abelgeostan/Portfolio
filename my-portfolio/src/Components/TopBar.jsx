import React from "react";

const TopBar = () => (
    <nav className="navbar navbar-expand-lg bg-primary fixed-top" data-bs-theme="light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#Home">Abel Stanley</a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarColor01"
                aria-controls="navbarColor01"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                {/* Right-side Buttons */}
               <div className="d-flex align-items-center gap-2 flex-wrap ms-auto mt-2 mt-lg-0">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="#Home">
                            <button className="btn btn-primary btn-sm">Home</button>
                            <span className="visually-hidden">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">
                            <button className="btn btn-primary btn-sm">About Me</button>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">
                            <button className="btn btn-primary btn-sm">Skills</button>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">
                            <button className="btn btn-primary btn-sm">Projects</button>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#education">
                            <button className="btn btn-primary btn-sm">Education</button>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">
                            <button className="btn btn-primary btn-sm">Contact</button>
                        </a>
                    </li>
                </ul>
                </div>
                
            </div>
        </div>
    </nav>
);

export default TopBar;
