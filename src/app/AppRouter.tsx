import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Dynamic from './pages/Dynamic';
import Main from './pages/Main';

export default function AppRouter(props: any): JSX.Element {
    return (
        <Router>
            {...props.children}
            <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route path="/:name">
                    <Dynamic/>
                </Route>
            </Switch>
            
        </Router>
    );
}