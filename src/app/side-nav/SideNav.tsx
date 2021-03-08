import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

export function SideNav(props: { navItem: NavItem[] }): JSX.Element {

    const item = (navItem: NavItem) => {
        return <ListGroup.Item action href={navItem.url} key={navItem.text}>
                {navItem.text}
            </ListGroup.Item>
    };

    return (
            <ListGroup>
                { props.navItem.map((n: NavItem) => item(n)) }
            </ListGroup>
    );
}

export interface NavItem {
    type: string;
    text: string;
    url: string;
}