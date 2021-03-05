import React, { Component } from "react";

import './Main.scss';
import { SideNav } from "../side-nav/SideNav";

export class Main extends Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    public render(): JSX.Element {
        return (
            <div className="sections">
                <div className="side-navigation">
                    <SideNav />
                </div>
                <div className="panel-allocation">
                    allocation
                </div>
                <div className="panel-balance">
                    balance
                </div>
                <div className="panel-positions">
                    positions
                </div>
            </div>
        );
    }
}