// import { render } from "react-dom";
// import { Container, Row, Col } from "reactstrap";

import React from "react";
import "./MainPage.css";
import Bio from "../../components/Bio";
import { Container, Row, Col } from 'react-bootstrap/'
import Footer from "../../components/Footer/Footer";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function MainPage() {
    return (
        <div className="main-page">
            <section>
                <h1>Projects</h1>
                <br></br>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            {projects.map(project => (
                                <ProjectCard
                                    key={project.key}
                                    name={project.name}
                                    image={project.image}
                                    repositoryLink={project.repositoryLink}
                                    deployedLink={project.deployedLink}
                                />
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <br></br>
                <h1>Bio</h1>
                <Bio />
            </section>
            <Footer />
        </div>
    );
}