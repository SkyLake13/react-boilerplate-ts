import React, { Component } from "react";

import './Layout.scss';
import { SideNav } from "../side-nav/SideNav";

export class Layout extends Component {
    render(): JSX.Element {
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