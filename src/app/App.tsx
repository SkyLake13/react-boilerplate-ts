import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.scss';
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { SideNav, NavItem } from "./side-nav/SideNav";

export function App(): JSX.Element {
    const [showNav, setShowNav] = useState<boolean>(true);

    const [nav] = useState<NavItem[]>([
        {
            text: 'Link 1', type: '', url: '/favicon.ico'
        },
        {
            text: 'Link 2', type: '', url: ''
        },
        {
            text: 'Link 3', type: '', url: ''
        },
        {
            text: 'Link 4', type: '', url: ''
        }
    ])

    const navigation = () => {
        if (showNav) {
            return <div className="side-navigation">
                    <SideNav navItem={nav}/>
                </div>
        }

        return undefined;
    }

    return (
            <Container>
                <Row>
                    <Col>
                        <Header onNavClick={() => setShowNav(!showNav)}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        { navigation() }
                    </Col>
                    <Col>
                        <Main />
                    </Col>
                </Row>
            </Container>
    );
}