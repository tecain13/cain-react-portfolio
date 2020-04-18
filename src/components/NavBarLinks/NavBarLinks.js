import React from "react";
import "./NavBarLinks.css";
import { Nav, Button } from 'react-bootstrap';


export default function NavBarLinks() {
    return (
        <Nav>
            <Nav.Item>
                <Button variant="outline-light" size="sm" active>
                    <Nav.Link href="/cain-react-portfolio">Home</Nav.Link>
                </Button>
            </Nav.Item>

            <Nav.Item>
                <Button variant="outline-light" size="sm" active>
                    <Nav.Link href="/cain-react-portfolio/contact">Contact</Nav.Link>
                </Button>
            </Nav.Item>
        </Nav>

    );
}


