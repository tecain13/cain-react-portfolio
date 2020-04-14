import React from "react";
import "./ContactPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


export default function ContactPage() {
    return (
        <div className="contact-page">
            <section>
                <h1>Projects</h1>
                {/* <br></br>
                {projects.map(project => (
                    <ProjectCard
                        key={project.key}
                        name={project.name}
                        image={project.image}
                        repositoryLink={project.repositoryLink}
                        deployedLink={project.deployedLink}
                    />
                ))} */}
            </section>
            <section>
                <br></br>
                {/* <h1>Bio</h1>
                <Bio /> */}
            </section>
            <Footer />
        </div>
    );
}