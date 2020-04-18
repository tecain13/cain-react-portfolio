import React from "react";
import "./NavBarLinks.css";
import { Nav, Button } from 'react-bootstrap';


export default function NavBarLinks() {
    return (
        <Nav>
            <Nav.Item>
                <Button variant="outline-light" size="sm" active>
                    <Nav.Link href="/">Home</Nav.Link>
                </Button>
            </Nav.Item>

            <Nav.Item>
                <Button variant="outline-light" size="sm" active>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Button>
            </Nav.Item>
        </Nav>

    );
}


