import React, { RefObject } from "react";

import './frame.scss'
import { BaseComponent } from "../../shared/base-component";

export class Frame extends BaseComponent<{ src: string, name: string }, {loaded: boolean, hasError: boolean, isFullscreen: boolean }> {
    private frame: RefObject<HTMLIFrameElement>;

    constructor(props: { src: string, name: string }) {
        super(props);

        this.state = {
            loaded: false,
            hasError: false,
            isFullscreen: document.fullscreenElement ? true : false
        };

        this.frame = React.createRef();
    }

    public componentDidMount(): void {
        console.log('----------frame component mounted----------');
        
        this.getAppContext().user.subscribe(u => console.log('------user-----', u));
    }

    private async maximize(): Promise<void> {
        if (!this.state.isFullscreen) {
            await this.frame.current?.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    private onLoad(): void {
        this.setState({
            loaded: true
        }, () => Frame.stateUpdated(this.state));
    }

    private onError(): void {
        this.setState({
            hasError: true
        }, () => Frame.stateUpdated(this.state));
    }

    private static stateUpdated(state: any): void {
        console.log('state updated', state)
    }

    render(): JSX.Element {
        return (
            <div>
                <div className="frame-header">
                    <span>{this.props.name}</span>
                    <button onClick={() => this.maximize()}>_</button>
                </div>
                <iframe ref={this.frame} src={this.props.src} 
                    allowFullScreen
                    onLoad={() => this.onLoad()}
                    onError={() => this.onError()}>
                </iframe>
            </div>
        );
    }
}
