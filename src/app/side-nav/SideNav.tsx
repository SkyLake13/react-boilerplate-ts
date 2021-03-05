import React from "react";

export function SideNav(props: { navItem: NavItem[] }): JSX.Element {
    return (
        <nav>
            <ul>
                { props.navItem.map((n: NavItem) => <li>{n.text}</li>) }
            </ul>
        </nav>
    );
}

export interface NavItem {
    type: string;
    text: string;
    url: string;
}