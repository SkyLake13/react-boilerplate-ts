import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.scss';
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { SideNav, NavItem } from "./side-nav/SideNav";
import { AppErrorBoundary } from "./error/AppErrorBoundary";
import { Http } from "./http/http";
import { BASE_URL } from "../env";
import { AxiosResponse } from "axios";
import { tokenInterceptor } from "./http/token-interceptor";
import { responseInterceptor } from "./http/response-interceptor";

export function App(): JSX.Element {
    const [showNav, setShowNav] = useState<boolean>(true);

    const [nav, setNav] = useState<NavItem[]>([])

    useEffect(() => {
        const http = new Http(BASE_URL);
        http.addRequestInterceptors(tokenInterceptor);
        http.addResponseInterceptors(responseInterceptor);

        console.log(http.requestInterceptors);

        http.get<any[]>('/navs?limit=5')
        .then((res: AxiosResponse<any[]>) => 
        res.data.map(r => { 
            return { 
            text: r.text,
            url: r.url,
            type: r.type 
        }}))
        .then(res => setNav(res as NavItem[]));
    }, []);

    const navigation = () => {
        if (showNav) {
            return <div className="side-navigation">
                <SideNav navItem={nav} />
            </div>
        }

        return undefined;
    }

    return (
        <AppErrorBoundary>
            <Container>
                <Row>
                    <Col>
                        <Header onNavClick={() => setShowNav(!showNav)} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {navigation()}
                    </Col>
                    <Col>
                        <Main />
                    </Col>
                </Row>
            </Container>
        </AppErrorBoundary>
    );
}