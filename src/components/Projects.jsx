import React, { useEffect } from "react";
import "headroom.js";
import "owl.carousel";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Projects = () => {
    useEffect(() => {
        // Load custom.js functionality after component mounts
        const script = document.createElement("script");
        script.src = "/assets/js/custom.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <section className="project py-5" id="project">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 text-center mx-auto col-12">
                            <div className="col-lg-8 mx-auto">
                                <h2>
                                    Things I have designed for digital media
                                    agencies
                                </h2>
                            </div>

                            <div className="owl-carousel owl-theme">
                                <div className="item">
                                    <div className="project-info">
                                        <img
                                            src="images/project/project-image01.png"
                                            className="img-fluid"
                                            alt="project image"
                                        />
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="project-info">
                                        <img
                                            src="images/project/project-image02.png"
                                            className="img-fluid"
                                            alt="project image"
                                        />
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="project-info">
                                        <img
                                            src="images/project/project-image03.png"
                                            className="img-fluid"
                                            alt="project image"
                                        />
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="project-info">
                                        <img
                                            src="images/project/project-image04.png"
                                            className="img-fluid"
                                            alt="project image"
                                        />
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="project-info">
                                        <img
                                            src="images/project/project-image05.png"
                                            className="img-fluid"
                                            alt="project image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
