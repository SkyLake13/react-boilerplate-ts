import React, { Component } from "react";

export class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                {this.props.children}
            </nav>
        );
    }
}