import React from "react";
import "./NavBarLinks.css";
import { Nav, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function NavBarLinks() {
    return (
        <Nav>
            <Nav.Item>
                <Button variant="outline-light" size="sm" active>
                    <Link to={`/`}>Home</Link>
                </Button>
            </Nav.Item>

            <Nav.Item>
                <Button variant="outline-light" size="sm" active>
                <Link to={`/contact`}>Contact</Link>
                </Button>
            </Nav.Item>
        </Nav>

    );
}


