import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { App } from './app';

render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>,
 document.getElementById("root"));
