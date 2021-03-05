import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';

export class SideNav extends Component {
    render(): JSX.Element {
        return (
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav>
        );
    }
}