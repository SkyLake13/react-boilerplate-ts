import React from "react";

import './Main.scss';

export function Main(): JSX.Element {
    return (
        <div className="sections margin">
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
