import React from "react";
import "./Header.css";
import Logo from "../Logo/";
import NavBarLinks from "../NavBarLinks";

import ContactInfo from "../ContactInfo";

export default function Header() {
    return (
        <nav className="header">
            <Logo />
            <NavBarLinks />
            <ContactInfo />
        </nav>
    );
}