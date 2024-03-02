import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Samples</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Get Started</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-disabled="true">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-disabled="true">Log Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;