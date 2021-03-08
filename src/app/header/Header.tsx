import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import './Header.scss';

export function Header(props: { onNavClick: Function }): JSX.Element {
    const [variant] = useState<'dark' | 'light' | undefined>('dark');

    return (
        <Navbar bg={variant} variant={variant}>
            <Button variant={variant} onClick={() => props.onNavClick() }>
                <i className="bi bi-list"></i>
            </Button>
            <Navbar.Brand className="mr-auto">
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
