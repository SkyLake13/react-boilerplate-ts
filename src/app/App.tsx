import React, { useState } from "react";

import './App.scss';
import { Header } from "./header/Header";
import { Main } from "./main/Main";

export function App(): JSX.Element {
    const [nav, setNav] = useState<boolean>(true);

    return (
            <div>
                <Header onNavClick={() => setNav(!nav)}/>
                <Main showNav={nav} />
            </div>
    );
}