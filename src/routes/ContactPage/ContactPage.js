import React from "react";
import "./ContactPage.css";
import { ListGroup } from 'react-bootstrap/'
import Footer from "../../components/Footer/Footer";


export default function ContactPage() {
    return (
        <div className="contact-page">
            <section>
                <h1>Contact Me</h1>
                <ListGroup>
                    <ListGroup.Item>Email: tecain13@gmail.com</ListGroup.Item>
                    <ListGroup.Item>Phone: 801-712-8481</ListGroup.Item>
                    <a href="https://github.com/tecain13">
                        <ListGroup.Item>Github </ListGroup.Item></a>
                    <a href="https://www.linkedin.com/in/tyler-cain-2ba429b1/">
                        <ListGroup.Item>LinkedIn</ListGroup.Item></a>
                    <a href="https://tecain13.github.io/Materialize-Portfolio/TylerCainGeneralDataScience2020.pdf" target="blank">
                        <ListGroup.Item>View My Resume</ListGroup.Item></a>
                </ListGroup>
            </section>
            <section>
                <br></br>
            </section>
            <Footer />
        </div>
    );
}