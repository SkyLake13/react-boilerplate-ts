import React, { Component } from "react";

import './App.scss';
import { Header } from "./header/Header";
import { Main } from "./main/Main";

export class App extends Component<{}, {}> {
    render(): JSX.Element {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="main">
                    <Main />
                </div>
            </div>
        );
    }
}