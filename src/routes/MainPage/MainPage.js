// import { render } from "react-dom";
// import { Container, Row, Col } from "reactstrap";

import React from "react";
import "./MainPage.css";
import Bio from "../../components/Bio";
import { Container, Row, Col } from 'react-bootstrap/'
import Footer from "../../components/Footer/Footer";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";
// import Background from '../../images/hotel-wallpaper.png'


// var backgroundPosition = {
//     backgroundImage: "../../images/hotel-wallpaper.png",
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat'
// };

export default function MainPage() {
    return (
        <div className="main-page">

            <Container className="backgroundPic">
                <Row>

                    <Col lg={12}>
                        <h1>Projects</h1>
                        <br></br>
                    </Col>

                </Row>
                <Row>
                    {projects.map(project => (
                        <Col lg={6} xs={12}>
                            <ProjectCard
                                key={project.key}
                                name={project.name}
                                image={project.image}
                                repositoryLink={project.repositoryLink}
                                deployedLink={project.deployedLink}
                            />
                        </Col>
                    ))}
                </Row>

                <Row>

                    <Col lg={12}>

                        <br></br>

                        <section className="biosection">
                            <Col lg={12}>
                                <h1>Bio</h1>
                                <Bio />
                            </Col>
                        </section>
                    </Col>

                </Row>


            </Container >

            <Footer />
        </div >
    );
}



