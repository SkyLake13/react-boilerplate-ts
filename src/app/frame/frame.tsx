import React, { Component, RefObject } from "react";

import './frame.scss'

export class Frame extends Component<{ src: string, name: string }, {}> {
    private frame: RefObject<HTMLIFrameElement>;

    constructor(props: { src: string, name: string }) {
        super(props);
        this.frame = React.createRef();
    }

    private maximize(): void {
        if (!document.fullscreenElement) {
            this.frame.current?.requestFullscreen().catch(err => {
              alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
          } else {
            document.exitFullscreen();
          }
    }

    render() {
        return (
            <div>
                <div className="frame-header">
                    <span>{this.props.name}</span>
                    <button onClick={() => this.maximize()}>_</button>
                </div>
                <iframe ref={this.frame} src={this.props.src} allowFullScreen></iframe>
            </div>
        );
    }
}
