import React, { Component } from "react";

import './Main.scss';
import { Header } from "./header/Header";
import { Layout } from "./layout/Layout";

export class Main extends Component<{}, {}> {
    render(): JSX.Element {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="main">
                    <Layout />
                </div>
            </div>
        );
    }
}