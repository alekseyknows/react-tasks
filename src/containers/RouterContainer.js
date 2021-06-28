import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from '../views/Home';
import NotFound from '../views/NotFound';

export default function RounterContainer() {

    const existingPages = ['/', '/counters', '/about-us'];

    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path={existingPages}
                    render={(props) => <Home {...props} />}
                />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}
