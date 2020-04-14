import React from "react";
import "./NavBarLinks.css";
import Nav from 'react-bootstrap/Nav';


export default function NavBarLinks() {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
        </Nav>

    );
}


