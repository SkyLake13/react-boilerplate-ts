import React, { useEffect, useState } from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import User from './pages/user/User';
import { NavItem } from './side-nav/SideNav';
import { getPages } from './App';
import { DyanmicPage } from './pages/dyanmic-page/DynamicPage';

export function AppRoutes(): JSX.Element {
    const [, setNav] = useState<NavItem[]>([])

    useEffect(() => {
        getPages().then(res => setNav(res as NavItem[]));
    }, []);

    
    return (
        <Switch>
            <Route path="/user">
                <User />
            </Route>
            <Route path="/:page">
                <DyanmicPage />
            </Route>
        </Switch>
    );
}