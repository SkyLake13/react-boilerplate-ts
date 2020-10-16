import React, { Component } from "react";

import { Header } from "./layout/header";
import { Nav } from "./layout/nav";
import { Content } from "./layout/content";

import './app.scss';
import { Frame } from "./frame/frame";

export class App extends Component {
    private navItems = ['Options 1', 'Options 2', 'Options 3', 'Options 4'];
    private contentItems = [
        { name: 'Content 1', url: 'http://localhost/child-1' },
        { name: 'Content 2', url: 'http://localhost/child-2' }
    ];

    constructor(props: any) {
        super(props);
    }

    private onNavItemClick(e: any): void {
        console.log(e);
    }

    public componentDidMount(): void {
        console.log('----------app component mounted----------');
        
    }

    render() {
        return (
            <div className="app">
                <div className="header">
                    <Header>
                        React App
                    </Header>
                </div>
                <div className="content-area">
                    <div className="nav">
                        <Nav>
                            {this.navItems.map(ni => <div key={ni} className="nav-item"
                                onClick={() => this.onNavItemClick(ni)}>{ni}</div>)}

                        </Nav>
                    </div>
                    <div className="main-content">
                        <Content>
                            {this.contentItems.map((ci) => <div key={ci.name} className="content-item">
                                <Frame src={ci.url} name={ci.name}/>
                            </div>)}
                        </Content>
                    </div>
                </div>
            </div>
        );
    }
}
