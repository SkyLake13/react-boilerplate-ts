import React, { Component } from "react";

export class Frame extends Component<{ src: string }, {}> {
    render() {
        return (
                <iframe src={this.props.src} ></iframe>
        );
    }
}
