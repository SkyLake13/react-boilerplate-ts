import React from "react";
import Navbar from 'react-bootstrap/Navbar'

import './Header.scss';

export function Header(props: { onNavClick: Function }): JSX.Element {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand className="mr-auto" onClick={() => props.onNavClick() }>
                <div className="user-round">
                    Rainbow
                </div>
            </Navbar.Brand>
            <div className="user-round">
                img
            </div>
        </Navbar>
    );
}
