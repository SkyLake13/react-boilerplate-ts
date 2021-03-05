import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'

import './Header.scss';

export class Header extends Component {
    public render(): JSX.Element {
        return (
                <Navbar bg="dark" variant="dark" sticky="top">
                    <Navbar.Brand className="mr-auto">
                        <div className="user-round">
                            Rainbow
                        </div>
                    </Navbar.Brand>
                    <div className="user-round">
                        <i className="bi-alarm"></i>
                    </div>
                </Navbar>
        );
    }
}