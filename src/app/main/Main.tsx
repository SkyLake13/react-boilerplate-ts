import React, { useState } from "react";

import './Main.scss';
import { SideNav, NavItem } from "../side-nav/SideNav";

export function Main(props: { showNav: boolean }): JSX.Element {

    const [nav] = useState<NavItem[]>([
        {
            text: 'Link 1', type: '', url: ''
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
        if (props.showNav) {
            return <div className="side-navigation">
                    <SideNav navItem={nav}/>
                </div>
        }

        return undefined;
    }

    return (
        <div className="sections margin">
            { navigation() }
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
