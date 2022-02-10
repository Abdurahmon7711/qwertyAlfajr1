import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Router(props) {
    return (
        <div>
            <BrowserRouter>
                <Router>
                    <Switch>
                        <Route path="/team11" component={Team} exact />
                    </Switch>
                </Router>
            </BrowserRouter>
        </div>
    );
}

export default Router;