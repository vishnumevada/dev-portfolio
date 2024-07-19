import React, { useEffect } from "react";
import $ from "jquery";
import "headroom.js";
import "owl.carousel";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Header = () => {
    useEffect(() => {
        // Load custom.js functionality after component mounts
        const script = document.createElement("script");
        script.src = "assets/js/custom.js";
        script.async = true;
        document.body.appendChild(script);

        // Ensure the jQuery runs after the component is mounted
        const handleColorModeToggle = () => {
            $(".color-mode-icon").toggleClass("active");
            $("body").toggleClass("dark-mode");
        };

        $(".color-mode").on("click", handleColorModeToggle);

        // Cleanup the event listener on component unmount
        return () => {
            $(".color-mode").off("click", handleColorModeToggle);
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <i className="uil uil-user"></i> Vishnu Mevada
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a href="#about" className="nav-link">
                                    <span data-hover="About">About</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#project" className="nav-link">
                                    <span data-hover="Projects">Projects</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#resume" className="nav-link">
                                    <span data-hover="Resume">Resume</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">
                                    <span data-hover="Contact">Contact</span>
                                </a>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-lg-auto">
                            <div className="ml-lg-4">
                                <div className="color-mode d-lg-flex justify-content-center align-items-center">
                                    <i className="color-mode-icon"></i>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
